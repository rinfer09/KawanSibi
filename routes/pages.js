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

Router.get('/editPassword', (req, res) => {
	res.sendFile(path.resolve('public/editpass.html'));
});

// dashboard
Router.get('/dashboard', (req, res) => {
	res.sendFile(path.resolve('public/dashboard.html'));
});

// quiz

Router.get('/quiz/mudah/angka', (req, res) => {
	res.sendFile(path.resolve('public/quiz.html'));
});
// ujian

Router.get('/ujian', (req, res) => {
	res.sendFile(path.resolve('public/Ujian.html'));
});

Router.get('/quiz/sulit/perasan');

module.exports = Router;
