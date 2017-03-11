const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').load();
const port = process.env.PORT || 3000;
const app = express();

const users = require('./routes/users');
const comments = require('./routes/comments');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api/users', users);
app.use('/api/comments', comments);
app.use('/', routes);
/*
app.get('*', (req, res, next)=>{
	res.sendFile(path.join(__dirname, 'dist/index.html'));
})
*/

app.listen(port);
console.log(`Server running on port: ${port}`);
