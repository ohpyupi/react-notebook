const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const User = require('../models/Users');
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

router.get('/', (req, res, next)=>{
	res.json({message: 'Successfully connected.'});
});

router.post('/signup', (req, res, next)=>{
	let user = new User();
	user.username = req.body.username;
	user.setPassword(req.body.password);
	connection.query('INSERT INTO users SET ?', user, (err, results, fields)=>{
		if (err) return next(err);
		return res.json({
			token: {},
			message: 'Successfully registered.'
		});
	});
});


module.exports = router;
