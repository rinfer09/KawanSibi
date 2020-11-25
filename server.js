const express = require('express');

const app = express();

const database = require('./koneksi');

app.use(express.static('public'));

const router = require('./routes');
app.use('/', router);

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
