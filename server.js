const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').load();
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port);
console.log(`Server running on port: ${port}`);
