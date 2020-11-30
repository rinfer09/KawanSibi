const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const conn = require('../koneksi');

module.exports = function (passport) {
	passport.use(
		new LocalStrategy(
			{ usernameField: 'username' },
			(username, password, done) => {
				// Match User
				const q = `SELECT * FROM user WHERE username =  '${username}' `;
				conn.query(q, (err, data) => {
					const user = data[0];
					if (!user) {
						return done(null, false, { message: 'Username belum terdaftar' });
					}
					//match user
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if (err) {
							throw err;
						} else if (isMatch) {
							return done(null, user);
						} else {
							return done(null, false, { message: 'Password Salah' });
						}
					});
				});
			}
		)
	);
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((user, done) => {
		conn.query(
			`SELECT * FROM user WHERE username = '${user.username}' `,
			(err, user) => {
				done(err, user[0]);
			}
		);
	});
};
