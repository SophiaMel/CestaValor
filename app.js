var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var promoRouter = require('./routes/promo');
var superRouter = require('./routes/super');
var AlcoolRouter = require('./routes/Alcool');
var AmacianteRouter = require('./routes/Amaciante');
var CarnesRouter = require('./routes/Carnes');
var CervejasRouter = require('./routes/Cervejas');
var DetergenteRouter = require('./routes/Detergente');
var FriosRouter = require('./routes/Frios');
var FruVerRouter = require('./routes/FruVer');
var LaticiniosRouter = require('./routes/Laticinios');
var RefriRouter = require('./routes/Refri');
var SucosRouter = require('./routes/Sucos');
var VinhoRouter = require('./routes/Vinho');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/promo', promoRouter);
app.use('/super', superRouter);
app.use('/Alcool', AlcoolRouter);
app.use('/Amaciante', AmacianteRouter);
app.use('/Carnes',CarnesRouter);
app.use('/Cervejas', CervejasRouter);
app.use('/Detergente', DetergenteRouter);
app.use('/Frios', FriosRouter);
app.use('/FruVer', FruVerRouter);
app.use('/Laticinios', LaticiniosRouter);
app.use('/Refri', RefriRouter);
app.use('/Sucos', SucosRouter);
app.use('/Vinho', VinhoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
