var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

require('dotenv').config();

var indexRouter = require('./routes/index');
var authorsRouter = require('./routes/authors');
var booksRouter= require('./routes/books')

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter)

//404 error handler
app.use(function (req, res, next) {
  next(createError(404));
  res.send({
    status: 'ERROR',
    statusCode: '404',
    message: 'NOT FOUND',
  })
});

// error handler
app.use(function (err, req, res, next) {
  res.send({
    status: 'ERROR',
    statusCode: err.status,
    message: err.message,
  });
});

var server = http.createServer(app);
var port = process.env.PORT;
server.listen(port);
