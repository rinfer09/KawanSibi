const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const error = document.querySelector('.pesan-error');
	if (error != null) {
		error.remove();
	}

	const usernameInput = document.getElementById('username');
	const emailInput = document.getElementById('email');
	const passwordInput = document.getElementById('password');

	const username = usernameInput.value;

	const password = passwordInput.value;

	fetch('/api/login', {
		method: 'POST',
		body: JSON.stringify({
			username: username,

			password: password,
		}),
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((res) => {
			if (res.ok) {
				window.location.href = '/';
			}
			return res.json();
		})
		.then((data) => {
			const div = document.createElement('div');
			div.classList.add('pesan-error');
			const p = document.createElement('p');
			p.textContent = data.message;
			div.appendChild(p);
			const headerElement = document.querySelector('#judul');
			headerElement.parentNode.insertBefore(div, form);
		});
});
