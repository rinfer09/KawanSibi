const userElement = document.querySelector("#username")
userElement.onclick = function (){
    const userPopUp = document.querySelector(".menu3")
    userPopUp.classList.toggle("hide")
}
const userImage = document.querySelectorAll(".gambar")
for (let i = 0; i < userImage.length; i++){
    userImage[i].onclick = function(){
        const menuPopUp = document.querySelectorAll(".pop-up")
       menuPopUp[i].classList.toggle("invisible")
    }
}
fetch("/api/profil").then(req => req.json()).then(data => {
    const userHalo = document.querySelector("#halo")
    userHalo.textContent = "Halo, " + data.username + "!"
    const user = document.querySelector("#username")
    if (data.foto_profil == null){
        user.textContent = data.username.substring(0,1)
    }    
    else {
        const image = document.createElement("img")
        image.src = data.foto_profil
        user.append(image)
    }
    const mudah = (data.n_abjad + data.n_angka + data.n_orang)/3
    const nilaiMudah = document.querySelector("#nilaiMudah")
    nilaiMudah.textContent = mudah + "%"
    const menengah = (data.n_tempat + data.n_pekerjaan + data.n_keluarga)/3
    const nilaiMenengah = document.querySelector("#nilaiMenengah")
    nilaiMenengah.textContent = menengah + "%"
    const sulit = (data.n_buah + data.n_perasaan + data.n_hari)/3
    const nilaiSulit = document.querySelector("#nilaiSulit")
    nilaiSulit.textContent = sulit + "%" 
})

