const Router = require('express').Router();
var path = require('path');

Router.get('/', (req, res) => {
	res.sendFile(path.resolve('public/main.html'));
});

Router.get('/login', (req, res) => {
	res.sendFile(path.resolve('public/login.html'));
});

Router.get('/register', (req, res) => {
	res.sendFile(path.resolve('public/register.html'));
});

module.exports = Router;
