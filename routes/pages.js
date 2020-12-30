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
	// if (req.user !== undefined) {
	// 	res.sendFile(path.resolve('public/Ujian.html'));
	// } else {
	// 	res.redirect('/');
	// }
	res.sendFile(path.resolve('public/Ujian.html'));
});

Router.get('/quiz/sulit/perasan');

// score
Router.get('/score', (req, res) => {
	// if (req.user !== undefined) {
	// 	res.sendFile(path.resolve('public/score.html'));
	// } else {
	// 	res.redirect('/');
	// }
	res.sendFile(path.resolve('public/score.html'));
});

module.exports = Router;
