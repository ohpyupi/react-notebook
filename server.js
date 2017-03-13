const express = require('express');
const passport = require('passport');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').load();
const port = process.env.PORT || 3000;
const app = express();

const users = require('./routes/users');
const comments = require('./routes/comments');
const routes = require('./routes');

require('./config/passport');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(passport.initialize());
app.use('/api/users', users);
app.use('/api/comments', comments);
app.use('/', routes);

app.listen(port);
console.log(`Server running on port: ${port}`);
