const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
	res.json({message: 'Successfully connected.'});
});

module.exports = router;
