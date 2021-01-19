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
			popUpMenu(3, 'mudah');
			ujian.onclick = (e) => {
				alert('selesaikan seluruh materi diatas 60% terlebih dahulu');
			};
			return 0;
		} else if (menengah < 60) {
			popUpMenu(6, 'mudah');
			ujian.onclick = (e) => {
				alert('selesaikan seluruh materi diatas 60% terlebih dahulu');
			};
			return 0;
		} else if (sulit < 60) {
			popUpMenu(9, 'menengah');
			ujian.onclick = (e) => {
				alert('selesaikan seluruh materi diatas 60% terlebih dahulu');
			};
			return 0;
		} else {
			popUpMenu(9, 'sulit');
			ujian.href = '/ujian';
			return 0;
		}
	});

function popUpMenu(akhir, level) {
	const userImage = document.querySelectorAll('.gambar');
	const menuPopUp = document.querySelectorAll('.pop-up');
	for (let i = 0; i < userImage.length; i++) {
		if (i >= akhir) {
			menuPopUp[
				i
			].innerHTML = `<span>Selesaikan materi ${level} diatas 60% Terlebih dahulu</span>`;
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
}
