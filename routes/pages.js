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

Router.get('/editProfil', (req, res) => {
	res.sendFile(path.resolve('public/editprofil.html'));
});

Router.get('/quiz/mudah/angka', (req, res) => {
	res.sendFile(path.resolve('public/quiz.html'));
});

module.exports = Router;
