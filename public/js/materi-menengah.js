const url = window.location.href.split('/');
const materi = url[url.length - 2];
const page = url[url.length - 1];

fetch('/data/materi-menengah.json')
    .then(rest => rest.json())
    .then (data => {
        switch(materi){
            case 'tempat':
                displayData(data.materiMenengah[0]);
                break;
            case 'pekerjaan':
                displayData(data.materiMenengah[1]);
                break;
            case 'keluarga':
                displayData(data.materiMenengah[2]);
                break;
        }
    })

function displayData(check) {
    const data = check.data;
    const imageElement = document.querySelectorAll('.contents-item');
    const descriptionELement = document.querySelector('.deskripsi');
    const mainElement = document.querySelector('#main');
    const imgElement = document.querySelector('.deskripsi-img');
    const tittleElement = document.querySelector('#judul');
    const descElement = document.querySelector('#keterangan');

    if (page == '1'){
        for(let i=0; i<imageElement.length; i++){
            imageElement[i].onclick = function (){
                
                descriptionELement.classList.remove('hide'); 
    
                imgElement.src = data.satu[i].gambar;
                tittleElement.textContent = data.satu[i].makna;
                descElement.textContent = data.satu[i].deskripsi;

                mainElement.classList.add('effect');
            }
        }
    }

    else{
        for(let i=0; i<imageElement.length; i++){
            imageElement[i].onclick = function (){
                
                descriptionELement.classList.remove('hide'); 
                
                imgElement.src = data.dua[i].gambar;
                tittleElement.textContent = data.dua[i].makna;
                descElement.textContent = data.dua[i].deskripsi;

                mainElement.classList.add('effect');
            }
        }
    }

    const closeElement = document.querySelector('.deskripsi-close');
    closeElement.onclick = function(){
        descriptionELement.classList.add('hide'); 

        mainElement.classList.remove('effect');
    }
}