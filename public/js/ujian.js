const answerList = {};
let nomer = 0;
let hasil = 0;
let soalUjian;
fetch('/data/ujian.json')
	.then((res) => res.json())
	.then((ujian) => {
		displayData(ujian);
	});

// menampilkan soal
function displayData(ujian) {
	if (ujian.ujian[nomer] === undefined) {
		sendData();
		return 0;
	}
	soal = ujian.ujian[nomer];
	// mengubah nomer pada halaman
	const nomerElement = document.querySelector('#nomor');
	nomerElement.textContent = soal.nomer;

	// mengubah gambar pada halaman
	const imageElement = document.querySelectorAll('.gambar img');
	for (let j = 0; j < imageElement.length; j++) {
		imageElement[j].src = soal.gambar[j];
	}

	const pilih = soal.pilihan;
	// menambahkan pilihan pada halaman
	pilih.forEach((element, index) => {
		const pilihanText = document.getElementsByClassName('teks');
		pilihanText[index].textContent = element;
		pilihanText[index].value = element;
	});
	answeringQuestion(pilih);
	const nextButton = document.getElementById('periksa');
	nextButton.onclick = () => {
		const checkAnswer =
			answerList.jawaban1 == soal.jawaban[0] &&
			answerList.jawaban2 == soal.jawaban[1];
		displayTrueFalse(checkAnswer, soal.jawaban);
	};

	const selanjutnya = document.querySelector('#selanjutnya');

	selanjutnya.onclick = () => {
		const hasilElement = document.querySelector('#hasil');

		hasilElement.classList.add('hide');

		const utamaElement = document.querySelector('#utama');
		removeAnswer();
		nomer++;
		displayData(ujian, nomer);
	};
}

const removeAnswer = () => {
	const jawabanDiv = document.querySelectorAll('.jawaban');
	jawabanDiv.forEach((e) => {
		if (e.childNodes[0] != undefined) {
			e.removeChild(e.childNodes[0]);
		}
	});
	const awal = document.querySelectorAll('.pilih');
	awal.forEach((e) => {
		e.classList.remove('invisible');
	});
	delete answerList.jawaban1;
	delete answerList.jawaban2;
};

function answeringQuestion() {
	const pilihanBox = document.querySelectorAll('.pilih');
	pilihanBox.forEach((e) => {
		e.onclick = function () {
			if (
				answerList.jawaban1 === undefined ||
				answerList.jawaban2 === undefined
			) {
				const userpick = this.childNodes[1].textContent;
				this.classList.toggle('invisible');
				let index = 0;
				if (answerList.jawaban1 == undefined) {
					answerList.jawaban1 = userpick;
					index = 0;
				} else {
					answerList.jawaban2 = userpick;
					index = 1;
				}
				const jawabContainer = document.querySelectorAll('.jawaban')[index];
				const div = document.createElement('div');
				div.classList.add('jawab');
				const p = document.createElement('p');
				p.textContent = userpick;
				div.append(p);
				jawabContainer.append(div);
			}
		};
	});
	ready(() => {
		const jawabanDiv = document.querySelectorAll('.jawaban');
		jawabanDiv.forEach((e, index) => {
			e.onclick = function () {
				const item = this.childNodes[0].childNodes[0].textContent;
				if (index == 0) {
					answerList.jawaban1 = undefined;
				} else if (index == 1) {
					answerList.jawaban2 = undefined;
				}
				this.removeChild(this.childNodes[0]);

				const pilihanBox = document.querySelectorAll('.pilih');
				pilihanBox.forEach((e) => {
					if (e.childNodes[1].textContent == item) {
						e.classList.toggle('invisible');
					}
				});
			};
		});
	});
}

function ready(callbackFunc) {
	if (document.readyState !== 'loading') {
		// Document is already ready, call the callback directly
		callbackFunc();
	} else if (document.addEventListener) {
		// All modern browsers to register DOMContentLoaded
		document.addEventListener('DOMContentLoaded', callbackFunc);
	} else {
		// Old IE browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'complete') {
				callbackFunc();
			}
		});
	}
}

const displayTrueFalse = (check, answer) => {
	const imageHasilElement = document.querySelector('#answer-img');
	const quoteElement = document.querySelector('#quote');
	const answerElement = document.querySelector('#answer');
	if (check === true) {
		imageHasilElement.src = '/asset/icon/score/check.svg';
		quoteElement.textContent = 'Jawaban kamu benar';
		hasil += 5;
	} else {
		imageHasilElement.src = '/asset/icon/score/cross.svg';
		quoteElement.textContent = 'Jawaban kamu salah';
	}
	answerElement.textContent = '"' + answer + '"';

	const hasilElement = document.querySelector('#hasil');

	hasilElement.classList.remove('hide');

	const utamaElement = document.querySelector('#utama');
};

const sendData = () => {
	window.localStorage.setItem('jmlSoal', '20');
	window.localStorage.setItem('benar', (hasil / 5).toString());
	fetch('/api/progress', {
		method: 'PATCH',
		body: JSON.stringify({
			level: 'ujian',
			nilai: hasil,
		}),
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			window.location.href = '/score';
		});
};
