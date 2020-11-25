const app = require('express').Router();
var path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.resolve('public/main.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.resolve('public/login.html'));
});

module.exports = app;
