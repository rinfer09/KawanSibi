const Router = require('express').Router();
const conn = require('../koneksi');

Router.patch('/', async (req, res) => {
	try {
		const { level, nilai } = req.body;
		const username = req.user.username;
		const q = `UPDATE user SET n_${level} = ${nilai} WHERE username = '${username}'`;
		const data = await conn.query(q, (err, data) => {
			if (err) {
				res.status(400).json({ message: err.message });
			}
			res.json({ message: 'Update berhasil', data: data });
		});
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

module.exports = Router;
