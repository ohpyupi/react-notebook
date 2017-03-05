const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
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

module.exports = router;
