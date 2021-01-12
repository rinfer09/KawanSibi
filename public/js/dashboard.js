let level = '';
const userElement = document.querySelector('#popup-menu');
userElement.onclick = function () {
	const userPopUp = document.querySelector('.menu3');
	userPopUp.classList.toggle('invisible');
};

fetch('/api/profil')
	.then((req) => req.json())
	.then((data) => {
		const userHalo = document.querySelector('#halo');
		userHalo.textContent = 'Halo, ' + data.username + '!';
		const user = document.querySelector('#username');
		if (data.foto_profil == null) {
			user.textContent = data.username.substring(0, 1);
		} else {
			const image = document.createElement('img');
			image.classList.add('foto-profil');
			image.src = data.fotoProfilS;
			user.appendChild(image);
			user.style.backgroundColor = 'transparent';
		}
		const mudah = (data.n_abjad + data.n_angka + data.n_orang) / 3;
		const nilaiMudah = document.querySelector('#nilaiMudah');
		nilaiMudah.textContent = Math.floor(mudah) + '%';
		const menengah = (data.n_tempat + data.n_pekerjaan + data.n_keluarga) / 3;
		const nilaiMenengah = document.querySelector('#nilaiMenengah');
		nilaiMenengah.textContent = Math.floor(menengah) + '%';
		const sulit = (data.n_buah + data.n_perasaan + data.n_hari) / 3;
		const nilaiSulit = document.querySelector('#nilaiSulit');
		nilaiSulit.textContent = Math.floor(sulit) + '%';
		const ujian = document.querySelector('#ujian-link');
		if (mudah < 60) {
			level = 'mudah';
			ujian.onclick = (e) => {
				e.preventDefault();
				alert('selesaikan seluruh materi terlebih dahulu');
			};
		} else if (menengah < 60) {
			level = 'menengah';
			ujian.onclick = (e) => {
				e.preventDefault();
				alert('selesaikan seluruh materi terlebih dahulu');
			};
		} else if (sulit < 60) {
			level = 'sulit';
			ujian.onclick = (e) => {
				e.preventDefault();
				alert('selesaikan seluruh materi terlebih dahulu');
			};
		} else {
			ujian.href = '/ujian';
		}

		const userImage = document.querySelectorAll('.gambar');
		const menuPopUp = document.querySelectorAll('.pop-up');
		for (let i = 0; i < userImage.length; i++) {
			let akhir = 0;
			if (level == 'mudah') {
				akhir = 3;
			} else if (level == 'menengah') {
				akhir = 6;
			} else if (level == 'sulit') {
				akhir = userImage.length;
			}
			console.log(akhir);
			if (i >= akhir) {
				menuPopUp[
					i
				].innerHTML = `<span>Selesaikan materi ${level} Terlebih dahulu</span>`;
			}
			userImage[i].onclick = function () {
				menuPopUp.forEach((e, index) => {
					if (index !== i) {
						e.classList.add('invisible');
					}
				});
				menuPopUp[i].classList.toggle('invisible');
			};
		}
	});
