let Answer = {
    jawaban1: " ",
    jawaban2: " "
}
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
	    for(let j=0;j<imageElement.length;j++){
            imageElement[j].src = soal.gambar[j];
            
        }

        const pilih = soal.pilihan;
	    // menambahkan pilihan pada halaman
	    pilih.forEach((element, index) => {
		    const pilihanText = document.getElementsByClassName('teks');
		    pilihanText[index].textContent = element;
            pilihanText[index].value = element;
        });
}
answeringQuestion();

function answeringQuestion() {
    const pilih = document.querySelectorAll('.pilih')
    const reset = document.getElementsByClassName('jawaban');
    const cek = {
    jawaban1: false,
    jawaban2: false
    };
    for(let i=0;i<pilih.length;i++){
        pilih[i].onclick = function (e){
        // if(reset[0].contains(pilih)){
        //     console.log('s')
        // }
        
            if(cek.jawaban2 == false){
            let jawaban = pilih[i].cloneNode(true);
            pilih[i].classList.toggle('invisible')
            const fill = document.querySelectorAll('.jawaban');
                if (cek.jawaban1 == true){
                    fill[1].appendChild(jawaban)
                    cek.jawaban2 = true;
                }else{
                    fill[0].appendChild(jawaban)
                    cek.jawaban1 = true;
                }
            }
        }
    }

    window.addEventListener('DOMContentLoaded',function (e) {
        console.log(e)    
        for(let i=0;i<reset.length;i++){
            reset[i].onclick = function (e){   
                reset[i].parentNode.removeChild(reset[i])
                
         }
         
    }
}); 
}

