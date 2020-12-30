let Answer = {
	jawaban1: ' ',
	jawaban2: ' ',
};
let nomer = 0;
fetch('/data/ujian.json')
	.then((res) => res.json())
	.then((ujian) => {
		displayData(ujian);
	});

// menampilkan soal
function displayData(ujian) {
	// update ke database bila soal sudah tidak ada lagi
	//if (ujian.ujian[nomer] === undefined) {
	//sendData();
	//return 0;
	//}
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
}

function answeringQuestion(pilihan) {
	const answerList = {};

	const pilihanBox = document.querySelectorAll('.pilih');
	pilihanBox.forEach((e) => {
		e.addEventListener('click', function () {
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
		});
	});
	ready(() => {
		const jawabanDiv = document.querySelectorAll('.jawaban');
		jawabanDiv.forEach((e, index) => {
			e.addEventListener('click', function () {
				const item = this.childNodes[0].childNodes[0].textContent;
				if (index == 0) {
					answerList.jawaban1 = undefined;
				} else if (index == 1) {
					answerList.jawaban2 = undefined;
				}
				console.log(answerList);
				this.removeChild(this.childNodes[0]);

				const pilihanBox = document.querySelectorAll('.pilih');
				pilihanBox.forEach((e) => {
					if (e.childNodes[1].textContent == item) {
						e.classList.toggle('invisible');
					}
				});
			});
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
