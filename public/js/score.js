let benar = window.localStorage.getItem('benar');
let jmlSoal = window.localStorage.getItem('jmlSoal');

const hasilElement = document.getElementById('hasil');
hasilElement.textContent = `${benar} / ${jmlSoal}`;

const quoteElement1 = document.getElementById('quote1');
const quoteElement2 = document.getElementById('quote2');
const img = document.getElementById('kelulusan');
if (benar >= jmlSoal * 0.7) {
	img.src = '/asset/icon/score/lulus.svg';
	quoteElement1.innerText = 'Yeeaay Selamat!!!';
	quoteElement2.innerText = 'telah';
} else {
	img.src = '/asset/icon/score/gagal.svg';
	quoteElement1.innerText = 'Yuk Coba Lagi!!!';
	quoteElement2.innerText = 'belum';
}
