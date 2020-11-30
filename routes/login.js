const Router = require('express').Router();
const passport = require('passport');

require('../config/passport');

Router.post('/', function (req, res, next) {
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			res.status('400').json(info);
		}
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.redirect('/');
		});
	})(req, res, next);
});

module.exports = Router;
