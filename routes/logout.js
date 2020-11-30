const Router = require('express').Router();

Router.get('/logout', (req, res) => {
	req.logOut();
	res.redirect('/login');
});

module.exports = Router;
