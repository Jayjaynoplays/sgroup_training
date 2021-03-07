require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return {
    status: 'error',
    statusCode: '404',
    message: 'NOT FOUND'
  }
});

// error handler
app.use(function (err, req, res, next) {
  return {
    status: 'error',
    statusCode: 500,
    message: 'ERROR BITCH!!',
  }
});

var server = http.createServer(app);


var port = process.env.PORT;
server.listen(port);