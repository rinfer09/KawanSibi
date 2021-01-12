require('dotenv').config();
const db = {
	host: process.env.HOSTDB || 'localhost',
	user: process.env.USERDB || 'root',
	password: process.env.PASSDB || '',
	database: process.env.DBNAME || 'kawansibi',
};
module.exports = db;
