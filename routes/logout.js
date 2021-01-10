const Router = require('express').Router();

Router.get('/', (req, res) => {
	req.logOut();
	res.redirect('/login');
});

module.exports = Router;
