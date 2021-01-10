const form = document.querySelector('form');
form.onsubmit = function (e) {
	e.preventDefault();
	const error = document.querySelector('.pesan-error');
	if (error != null) {
		error.remove();
	}
	const passlama = document.querySelector('#pw1').value;
	const passbaru = document.querySelector('#pw2').value;
	const konfirm = document.querySelector('#pw3').value;

	fetch('/api/editPassword', {
		method: 'PATCH',
		body: JSON.stringify({
			passwordLama: passlama,
			password1: passbaru,
			password2: konfirm,
		}),
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((req) => {
			if (req.ok) {
				window.location.href = '/dashboard';
			}
			return req.json();
		})
		.then((data) => {
			if (Array.isArray(data)) {
				data.forEach((ele) => {
					makeErrorMsg(ele);
				});
			} else {
				makeErrorMsg(data);
			}
		});
};

function makeErrorMsg(ele) {
	const div = document.createElement('div');
	div.classList.add('pesan-error');
	const p = document.createElement('p');
	p.textContent = ele.message;
	div.appendChild(p);
	const headerElement = document.querySelector('form');
	headerElement.parentNode.insertBefore(div, headerElement);
}
