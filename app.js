var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var orders = require('./routes/orders');
var coupons = require('./routes/coupons');
var bouns = require('./routes/bouns');
var qa = require('./routes/qa');
var delivery = require('./routes/delivery');
var invoice = require('./routes/invoice');
var keyword = require('./routes/keyword');
var login = require('./routes/login');
var wishlist = require('./routes/wishlist');
var admin = require('./routes/admin');
var groups = require('./routes/groups');
var db = require('./db');

var app = express();

//  view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//  uncomment after placing your favicon in /public
//  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//  Database and models
db.connect(db.TEST_DB, function(err){
  if (err) {
    console.log('Unable to connect database.');
    process.exit(1);
  } else {
    app.listen(3000, function(){
      console.log('Listening on port 3000...');
    });
  }
});

app.use('/', routes);
app.use('/users', users);
app.use('/orders', orders);
app.use('/coupons', coupons);
app.use('/bouns', bouns);
app.use('/qa', qa);
app.use('/delivery', delivery);
app.use('/invoice', invoice);
app.use('/keyword', keyword);
app.use('/login', login);
app.use('/wishlist', wishlist);
app.use('/admin', admin);
app.use('/groups', groups);

//  catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//  error handlers

//  development error handler
//  will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;