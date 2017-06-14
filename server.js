const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || '8000';
const aws = require('aws-sdk');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
const config = require('./config');
const passport = require('passport');
const db = require('./server/models');

// cookie, logger, body-parser
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Passport
app.use(passport.initialize());
app.use(require('./config/passport').serializeUser);

// static files.
app.use('/static', express.static(path.join(__dirname, 'build/static')));

// routes
// app.use('/', require('./server/routes/html'));
app.use('/api/image', require('./server/routes/image'));
app.use('/api/user', require('./server/routes/user'));
app.use('/api/skill', require('./server/routes/skill'));
app.use('/api/project', require('./server/routes/project'));
app.use('/api/auth', require('./server/routes/auth'));
app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).end();
  // res.render('error', {err});
});


/**
 * db sync and listen
 */
db.sequelize.sync({}).then(() => {
  console.log("Connected to mysql db");
  app.listen(port, () => console.log("Server listening on " + port));
})
  .catch(err => console.log("Could not connect to db."));
app.on('error', onError);
app.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
}

module.exports = app;
