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

Router.get('/quiz/sulit/perasan');

//materi-dasar-abjad

Router.get('/materi-dasar-abjad', (req, res) => {
	res.sendFile(path.resolve('public/Materi-dasar-abjad.html'));
});

//materi-dasar-angka

Router.get('/materi-dasar-angka', (req, res) => {
	res.sendFile(path.resolve('public/Materi-dasar-angka.html'));
});

//materi-dasar-kata ganti orang

Router.get('/materi-dasar-katagantiorang', (req, res) => {
	res.sendFile(path.resolve('public/Materi-dasar-kata ganti orang.html'));
});

//materi-menengah-tempat

Router.get('/materi-menengah-tempat-1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-tempat-1.html'));
});

Router.get('/materi-menengah-tempat-2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-tempat-2.html'));
});

//materi-menengah-pekerjaan

Router.get('/materi-menengah-pekerjaan-1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-pekerjaan-1.html'));
});

Router.get('/materi-menengah-pekerjaan-2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-pekerjaan-2.html'));
});

//materi-menengah-keluarga

Router.get('/materi-menengah-keluarga-1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-keluarga-1.html'));
});

Router.get('/materi-menengah-keluarga-2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-keluarga-2.html'));
});

//materi-mahir-buah

Router.get('/materi-mahir-buah-1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-buah-1.html'));
});

Router.get('/materi-mahir-buah-2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-buah-2.html'));
});

//materi-mahir-perasaan

Router.get('/materi-mahir-perasaan-1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-perasaan-1.html'));
});

Router.get('/materi-mahir-perasaan-2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-perasaan-2.html'));
});

//materi-mahir-hari

Router.get('/materi-mahir-hari', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-hari.html'));
});

module.exports = Router;
