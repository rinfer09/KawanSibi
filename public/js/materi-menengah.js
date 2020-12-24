const url = window.location.href.split('/');
const materi = url[url.length - 2];

// let materi = 'abjad';

fetch('/data/materi-menengah.json')
    .then(rest => rest.json())
    .then (data => {
    // console.log(data.materidasar);
        switch(materi){
            case 'Tempat':
                displayData(data.menengah[0]);
                break;
            case 'Pekerjaan':
                displayData(data.menengah[1]);
                break;
            case 'Keluarga':
                displayData(data.menengah[2]);
                break;
        }
    })

function displayData(check, answer) {
	const imageElement = document.querySelector('.deskripsi-img');
	const titleElement = document.querySelector('#judul');
	const descriptionElement = document.querySelector('#keterangan');

	const deskripsiElement = document.querySelector('.deskripsi');
	deskripsiElement.classList.remove('hide');

	const mainElement = document.querySelector('.main');
	mainElement.classList.add('blur');
}