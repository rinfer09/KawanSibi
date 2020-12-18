const Router = require('express').Router();

const pages = require('./pages');
Router.use('/', pages);

const editPassword = require('./editPassword');
Router.use('/api/editPassword', editPassword);

const progress = require('./progress');
Router.use('/api/progress', progress);

const login = require('./login');
Router.use('/api/login', login);

const logout = require('./logout');
Router.use('/api/logout', logout);

const profil = require('./profil');
Router.use('/api/profil', profil);

const register = require('./register');
Router.use('/api/register', register);

module.exports = Router;
