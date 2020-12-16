const level = 'mudah';
const materi = 'angka';
let userAnswer = '';

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

function displayData(data, nomer = 0) {
	const judul = data.judul;
	soal = data.data[nomer];
	console.log(soal);
	const nomerElement = document.querySelector('#nomor');
	nomerElement.textContent = soal.nomer;

	const imageElement = document.querySelector('.soal img');
	imageElement.src = soal.gambar;

	const pilih = soal.pilihan;

	pilih.forEach((element, index) => {
		const pilihanText = document.getElementsByClassName('teks');
		pilihanText[index].textContent = element;
		pilihanText[index].value = element;
	});

	answeringQuestion();
	const nextButton = document.querySelector('#periksa');
	nextButton.addEventListener('click', () => {
		const checkAnswer = userAnswer == soal.jawaban;
		console.log(checkAnswer);
		displayTrueFalse(true, soal.jawaban);
	});
	if (nomer < soal.length) {
	}
}

function displayTrueFalse(check, answer) {
	if (check === true) {
	}
	const hasilElement = document.querySelector('#hasil');
	hasilElement.classList.remove('hide');

	const utamaElement = document.querySelector('#utama');
	utamaElement.classList.add('blur');
}

function answeringQuestion() {
	const pilihanBox = document.querySelectorAll('.teks');
	console.log(pilihanBox);
	pilihanBox.forEach((element, index) => {
		element.addEventListener('click', function () {
			userAnswer = this.textContent;
		});
	});
}
