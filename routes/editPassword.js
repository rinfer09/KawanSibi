const Router = require('express').Router();
const conn = require('../koneksi');
const bcrypt = require('bcrypt');
const saltRounds = 10;

Router.patch('/', async (req, res) => {
	try {
		const username = req.user.username;
		const { passwordLama, password1, password2 } = req.body;
		if (password1 !== password2) {
			res.status('500').json({ message: 'password tidak sama' });
		}
		if (password1.length < 6) {
			res
				.status('500')
				.json({ message: 'Password harus lebih dari 6 karakter' });
		}
		await conn.query(
			`SELECT username, password FROM user WHERE username = '${username}'`,
			(err, data) => {
				const user = data[0];
				//match user
				bcrypt.compare(passwordLama, user.password, (err, isMatch) => {
					if (err) {
						res.status(400).json(err.message);
					}
					if (!isMatch) {
						res.status(400).json({ message: 'Password Salah' });
					} else {
						bcrypt.genSalt(saltRounds, (err, salt) => {
							bcrypt.hash(password1, salt, (err, hash) => {
								if (err) throw err;
								q = `UPDATE user SET password = '${hash}' WHERE username = '${username}'`;
								conn.query(q, (err) => {
									if (err) {
										res.status('400').json({
											status: 'Failed',
											message: err.message,
										});
									}
									res.json({
										status: 'OK',
										message: 'Ganti Password Berhasil',
									});
								});
							});
						});
					}
				});
			}
		);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

module.exports = Router;
