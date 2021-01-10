fetch("/api/profil").then(req => req.json()).then(data => {
    const fotoprofil=document.querySelector("#fotoprofil")
    fotoprofil.onclick=function(){
        document.querySelector(".inputimage").click()
    }
    if (data.foto_profil!=null){
        fotoprofil.src=data.foto_profil;
    }
    const inputimage = document.querySelector(".inputimage")
    var fotoprofil2 = ""
    inputimage.onchange=function(event){
        let input = event.target
        let reader = new FileReader()
        reader.onload=function(e){
            let dataurl = e.target.result
           
            document.querySelector("#fotoprofil").src=dataurl
            fotoprofil2=dataurl
        }
        reader.readAsDataURL(input.files[0])
       
    }
    const username = document.querySelector("#Username")
    username.value=data.username;

    const namadepan = document.querySelector("#namadepan")
    namadepan.value=data.nama_depan;

    const namabelakang = document.querySelector("#namabelakang")
    namabelakang.value=data.nama_belakang;

    const email = document.querySelector("#email")
    email.value=data.email;

    const nohp = document.querySelector("#nohp")
    nohp.value=data.no_hp;

    const tanggallahir = document.querySelector("#tanggallahir")
    let tanggallahir2 = new Date(data.tanggal_lahir)
    var dd = String(tanggallahir2.getDate()).padStart(2, '0');
    var mm = String(tanggallahir2.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = tanggallahir2.getFullYear();

    tanggallahir2 = yyyy + '-' + mm + '-' + dd;
    tanggallahir.value=tanggallahir2

    const jeniskelamin = data.jenis_kelamin
    if (jeniskelamin=="perempuan"){
        const perempuan = document.querySelector("#Perempuan")
        perempuan.checked=true
    }
    else if (jeniskelamin=="laki-laki"){
        const lakilaki = document.querySelector("#laki-laki")
        
        lakilaki.checked=true
    }

})

const simpan = document.querySelector("form")
simpan.onsubmit = function(e){
    e.preventDefault()
    const namadepan = document.querySelector("#namadepan").value
    const namabelakang = document.querySelector("#namabelakang").value
    const nohp = document.querySelector("#nohp").value
    const tanggallahir = document.querySelector("#tanggallahir").value
    let jeniskelamin=""
    const perempuan = document.querySelector("#Perempuan").checked
    const lakilaki = document.querySelector("#laki-laki").checked
    if (perempuan){
        jeniskelamin="perempuan"
    }
    else if(lakilaki){
        jeniskelamin="laki-laki"
    }  
    const fotoprofil=document.querySelector("#fotoprofil").src
 fetch("/api/profil",{
     method:"PATCH",
     body:JSON.stringify({
       nama_depan:namadepan,
       nama_belakang:namabelakang,
       no_hp:nohp,
       tanggal_lahir:tanggallahir,
       jenis_kelamin:jeniskelamin,
       foto_profil:fotoprofil,
     }),
     headers:{
         "content-type":"application/json",
     }
 }).then(req => req.json()).then(data => {
 })
}