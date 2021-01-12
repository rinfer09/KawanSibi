require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

require('./koneksi');
require('./config/passport')(passport);

app.use(express.static('public'));
app.use(cookieParser());

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

const router = require('./routes');
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('server is running on port 3000');
});
