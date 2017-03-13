const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/Users');
const connection = require('../config/mysql')
require('dotenv').load();


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

router.post('/login', (req, res, next)=>{
	passport.authenticate('local', (err, user, info)=>{
		if (err) return next(err);
		if (user) {
			return res.json({
				token: user.generateJWT(),
				message: 'Welcome Back!',
			});
		} else {
			return res.status(401).json(info);
		}
	})(req, res, next);
});

module.exports = router;
