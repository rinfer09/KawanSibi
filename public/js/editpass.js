const form=document.querySelector("form")
form.onsubmit = function(e){
    e.preventDefault()
    const passlama = document.querySelector("#pw1").value
    const passbaru = document.querySelector("#pw2").value
    const konfirm = document.querySelector("#pw3").value

    fetch("/api/editPassword",{
        method:"PATCH",
        body:JSON.stringify({
           passwordLama:passlama,
           password1:passbaru,
           password2:konfirm,
        }),
        headers:{
        "content-type":"application/json",
        }
    }).then(req => req.json()).then(data => {
    console.log(data)
    const div = document.createElement('div');
			div.classList.add('pesan-error');
			const p = document.createElement('p');
			p.textContent = data.message;
			div.appendChild(p);
			const headerElement = document.querySelector('#judul');
			headerElement.parentNode.insertBefore(div, form);
    })

}

