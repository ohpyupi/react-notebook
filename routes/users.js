const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const mysql = require('mysql');
require('dotenv').load();

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

connection.connect(err=>{
	if (err) return console.error(`Error Connecting: ${err.stack}`);
	console.log(`connected as id ${connection.threadId}`);
});

class User {
	constructor() {
		this.createdAt = Date.now();
		this.editedAt = Date.now();
	}
	setPassword (password) {
		this.salt = crypto.randomBytes(16).toString('hex');
		this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
	}
}

router.get('/', (req, res, next)=>{
	res.json({message: 'Successfully connected.'});
});

router.post('/signup', (req, res, next)=>{
	let user = new User();
	user.username = req.body.username;
	user.setPassword(req.body.password);
	console.log(user);
});


module.exports = router;
