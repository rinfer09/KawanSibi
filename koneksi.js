const mysql = require('mysql');
const db = require('./config/configdb');

const connection = mysql.createConnection(db);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected to database');
});
