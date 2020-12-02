const router = require('express').Router();
const conn = require('../koneksi');
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/', async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const error = [];
		if (!username || !email || !password) {
			error.push({ msg: 'Isi semua kolom!' });
		}
		if (password.length < 6) {
			error.push({ msg: 'Password harus lebih dari 6 karakter' });
		}
		if (error.length > 0) {
			res.status('500').json(error);
		} else {
			await conn.query(
				`SELECT * FROM user WHERE email = '${email}' OR username = '${username}'`,
				(err, data) => {
					const user = data[0];
					if (err) {
						res.status('400').json({ message: err.message });
					}
					if (user && user.email == email) {
						res.status('400').json({ message: 'Email sudah digunakan' });
					} else if (user && user.username == username) {
						res.status('400').json({ message: 'Username sudah digunakan' });
					} else {
						const user = {
							username: username,
							email: email,
							password: password,
						};
						bcrypt.genSalt(saltRounds, (err, salt) => {
							bcrypt.hash(user.password, salt, (err, hash) => {
								if (err) throw err;
								user.password = hash;
								conn.query(
									`INSERT INTO user (username, email, password)
										VALUES ('${user.username}', '${user.email}', '${user.password}')`,
									(err) => {
										if (err) {
											res.status('400').json({
												status: 'Failed',
												message: 'Daftar Akun Gagal',
											});
										}
										res.json({
											status: 'OK',
											message: 'Daftar Akun Berhasil',
										});
									}
								);
							});
						});
					}
				}
			);
		}
	} catch (err) {
		res.status('400').json({ message: err.message });
	}
});

module.exports = router;
