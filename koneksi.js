const mysql = require('mysql');
const db = require('./config/configdb');

var connection = mysql.createConnection(db);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected ro database as id ' + connection.threadId);
});
