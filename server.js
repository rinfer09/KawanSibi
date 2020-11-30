const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./koneksi');
require('./config/passport')(passport);

app.use(express.static('public'));
app.use(
	session({
		secret: 'ini adalah rahasia',
		resave: false,
		saveUninitialized: false,
	})
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

const router = require('./routes');
app.use('/', router);

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
