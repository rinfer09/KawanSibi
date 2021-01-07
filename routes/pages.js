const Router = require('express').Router();
var path = require('path');

Router.get('/', (req, res) => {
	if (req.user === undefined) {
		res.sendFile(path.resolve('public/main.html'));
	} else {
		res.redirect('/dashboard');
	}
});

Router.get('/login', (req, res) => {
	if (req.user === undefined) {
		res.sendFile(path.resolve('public/login.html'));
	} else {
		res.redirect('/dashboard');
	}
});

Router.get('/register', (req, res) => {
	if (req.user === undefined) {
		res.sendFile(path.resolve('public/register.html'));
	} else {
		res.redirect('/dashboard');
	}
});

Router.get('/editProfil', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/editprofil.html'));
	} else {
		res.redirect('/');
	}
});

Router.get('/editPassword', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/editpass.html'));
	} else {
		res.redirect('/');
	}
});

// dashboard
Router.get('/dashboard', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/dashboard.html'));
	} else {
		res.redirect('/');
	}
});

// quiz

Router.get('/quiz/mudah/angka', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/mudah/abjad', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/mudah/kata-ganti-orang', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/menengah/pekerjaan', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/menengah/tempat', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/menengah/keluarga', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/sulit/buah', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/sulit/perasaan', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
Router.get('/quiz/sulit/hari', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/quiz.html'));
	} else {
		res.redirect('/');
	}
});
// ujian

Router.get('/ujian', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/Ujian.html'));
	} else {
		res.redirect('/');
	}
});

// score
Router.get('/score', (req, res) => {
	if (req.user !== undefined) {
		res.sendFile(path.resolve('public/score.html'));
	} else {
		res.redirect('/');
	}
});

//materi-dasar-abjad

Router.get('/materi/dasar/abjad', (req, res) => {
	res.sendFile(path.resolve('public/Materi-dasar-abjad.html'));
});

//materi-dasar-angka

Router.get('/materi/dasar/angka', (req, res) => {
	res.sendFile(path.resolve('public/Materi-dasar-angka.html'));
});

//materi-dasar-kata ganti orang

Router.get('/materi/dasar/katagantiorang', (req, res) => {
	res.sendFile(path.resolve('public/Materi-dasar-kata ganti orang.html'));
});

//materi-menengah-tempat

Router.get('/materi/menengah/tempat/1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-tempat-1.html'));
});

Router.get('/materi/menengah/tempat/2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-tempat-2.html'));
});

//materi-menengah-pekerjaan

Router.get('/materi/menengah/pekerjaan/1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-pekerjaan-1.html'));
});

Router.get('/materi/menengah/pekerjaan/2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-pekerjaan-2.html'));
});

//materi-menengah-keluarga

Router.get('/materi/menengah/keluarga/1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-keluarga-1.html'));
});

Router.get('/materi/menengah/keluarga/2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-menengah-keluarga-2.html'));
});

//materi-mahir-buah

Router.get('/materi/sulit/buah/1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-buah-1.html'));
});

Router.get('/materi/sulit/buah/2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-buah-2.html'));
});

//materi-mahir-perasaan

Router.get('/materi/sulit/perasaan/1', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-perasaan-1.html'));
});

Router.get('/materi/sulit/perasaan/2', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-perasaan-2.html'));
});

//materi-mahir-hari

Router.get('/materi/sulit/hari', (req, res) => {
	res.sendFile(path.resolve('public/Materi-mahir-hari.html'));
});

module.exports = Router;
