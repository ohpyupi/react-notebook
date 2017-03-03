const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').load();
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/comments', (req, res, next)=>{
	let comments = [
		{
			id: 1,
			name: {
				first: 'Hoseong',
				last: 'Lee',
			},
			contact: {
				email: 'hlee@zoozler.com',
				phone: '123) 123 - 1234',
			},
			subject: 'Supergentle Company',
			body: "Not all gentlemen are gentle..",
		},
		{
			id: 2,
			name: {
				first: 'McCall',
				last: 'Tucker',
			},
			contact: {
				email: 'mtucker@zoozler.com',
				phone: '123) 123 - 1234',
			},
			subject: 'Alchemist Life',
			body: "Alchemist lives long even if radiation exposure.",
		},
		{
			id: 3,
			name: {
				first: 'Sirena',
				last: 'Barrel',
			},
			contact: {
				email: 'sbarrel@zoozler.com',
				phone: '123) 123 - 1234',
			},
			subject: 'Guru Guru Guru!',
			body: "That's so funny!",
		},
	];
	res.json(comments);
});

app.get('*', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port);
console.log(`Server running on port: ${port}`);
