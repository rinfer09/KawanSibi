const url = window.location.href.split('/');
const level = url[url.length - 2];
const materi = url[url.length - 1];
let userAnswer = '';
let hasil = 0;
let nomer = 0;

fetch('/data/quiz.json')
	.then((res) => res.json())
	.then((data) => {
		switch (materi) {
			case 'abjad':
				displayData(data.mudah[0]);
				break;
			case 'angka':
				displayData(data.mudah[1]);
				break;
			case 'kata-ganti-orang':
				displayData(data.mudah[2]);
				break;
			case 'tempat':
				displayData(data.menengah[0]);
				break;
			case 'pekerjaan':
				displayData(data.menengah[1]);
				break;
			case 'keluarga':
				displayData(data.menengah[2]);
				break;
			case 'buah':
				displayData(data.sulit[0]);
				break;
			case 'perasaan':
				displayData(data.sulit[1]);
				break;
			case 'hari':
				displayData(data.sulit[2]);
				break;
			default:
				console.log('data tidak ditemukan');
				break;
		}
	});

// menampilkan soal

function displayData(data) {
	// update ke database bila soal sudah tidak ada lagi
	if (data.data[nomer] === undefined) {
		sendData();
		return 0;
	}
	userAnswer = '';
	soal = data.data[nomer];

	// mengubah nomer pada halaman
	const nomerElement = document.querySelector('#nomor');
	nomerElement.textContent = soal.nomer;

	// mengubah gambar pada halaman
	const imageElement = document.querySelector('.soal img');
	imageElement.src = soal.gambar;

	const pilih = soal.pilihan;
	// menambahkan pilihan pada halaman
	pilih.forEach((element, index) => {
		const pilihanText = document.getElementsByClassName('teks');
		pilihanText[index].textContent = element;
		pilihanText[index].value = element;
	});

	// menjawab pertanyaan
	answeringQuestion();

	// soal selanjutnya
	const nextButton = document.querySelector('#periksa');
	nextButton.addEventListener('click', () => {
		const checkAnswer = userAnswer == soal.jawaban;
		if (userAnswer !== '') {
			displayTrueFalse(checkAnswer, soal.jawaban);
		} else {
			const gambar = document.querySelector('#answer-img');
			const quote = document.querySelector('#quote');
			gambar.src = '/asset/icon/score/cross.svg';
			quote.textContent = 'Jawaban kamu salah';
		}
	});

	const selanjutnya = document.querySelector('#selanjutnya');

	selanjutnya.addEventListener('click', () => {
		const hasilElement = document.querySelector('#hasil');

		hasilElement.classList.add('hide');

		const utamaElement = document.querySelector('#utama');
		utamaElement.classList.remove('blur');
		removeAnswer();
		if (userAnswer === '') {
			displayData(data, nomer);
		} else {
			nomer++;
			displayData(data, nomer);
		}
	});
}

// menampilkan popup benar dan salah
function displayTrueFalse(check, answer) {
	const imageHasilElement = document.querySelector('#answer-img');
	const quoteElement = document.querySelector('#quote');
	const answerElement = document.querySelector('#answer');
	if (check === true) {
		imageHasilElement.src = '/asset/icon/score/check.svg';
		quoteElement.textContent = 'Jawaban kamu benar';
		hasil += 20;
	} else {
		imageHasilElement.src = '/asset/icon/score/cross.svg';
		quoteElement.textContent = 'Jawaban kamu salah';
	}
	answerElement.textContent = '"' + answer + '"';

	const hasilElement = document.querySelector('#hasil');

	hasilElement.classList.remove('hide');

	const utamaElement = document.querySelector('#utama');
	utamaElement.classList.add('blur');
}

function answeringQuestion() {
	const pilihanBox = document.querySelectorAll('.jawab');
	pilihanBox.forEach((element) => {
		element.addEventListener('click', (e) => {
			removeAnswer();
			userAnswer = e.target.value;
			for (let item of element.children) {
				item.classList.add('klik-jawab');
			}
		});
	});
}

function removeAnswer() {
	const box = document.querySelectorAll('.jawab');
	box.forEach((el) => {
		for (let item of el.children) {
			item.classList.remove('klik-jawab');
		}
	});
}

function sendData() {
	fetch('/api/progress', {
		method: 'PATCH',
		body: JSON.stringify({
			level: materi,
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
}
