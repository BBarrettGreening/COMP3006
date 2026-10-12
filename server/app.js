var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var usersRouter = require('./routes/users');

var app = express();

var clientOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:8080,http://localhost:1234').split(',');

app.use(logger('dev'));
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);

module.exports = app;
