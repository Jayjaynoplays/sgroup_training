var createError = require('http-errors');
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

require('dotenv').config();

var indexRouter = require('./src/routes/index');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.send({
    status: 'ERROR',
    statusCode: '404',
    message: 'NOT FOUND',
  })
});

// error handler
app.use(function (err, req, res, next) {
  return res.send({
    status: 'ERROR',
    statusCode: err.status,
    message: err.message,
  });
});

// var port = process.env.PORT ;
// var server = http.createServer(app);
// server.listen(port);

var port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App is running at http://localhost:${port} in ${app.get('env')} mode`);
  console.log('Press CTRL-C to stop\n');
});

module.exports = server;

