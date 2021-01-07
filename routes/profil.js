const Router = require('express').Router();
const conn = require('../koneksi');

Router.get('/', (req, res) => {
	if (req.user === undefined) {
		res.json({ message: 'tidak ada user' });
	} else {
		res.json(req.user);
	}
});

// update user profil
Router.patch('/', async (req, res) => {
	try {
		//const username = req.user.username;
		const username = "dennisf";
		const input = req.body;
		const q = `UPDATE user SET ? WHERE username = '${username}'`;
		const data = await conn.query(q, input, (err, data) => {
			if (err) {
				res.status(400).json({ message: err.message });
			}
			res.json({ message: 'Update berhasil', data: data });
		});
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// delete user

module.exports = Router;
