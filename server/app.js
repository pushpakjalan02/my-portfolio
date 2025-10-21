require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var database = require('./config/database');

var app = express();

// Connect to the database
database();

// Middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/about', require('./routes/about'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/education', require('./routes/education'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/work-experience', require('./routes/workExperience'));
app.use('/api/links', require('./routes/links'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler - return JSON instead of rendering
app.use(function(err, req, res, next) {
  // Log error in development
  if (req.app.get('env') === 'development') {
    console.error(err.stack);
  }

  // Send JSON response
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      // Only include stack trace in development
      ...(req.app.get('env') === 'development' && { stack: err.stack, details: err })
    }
  });
});

module.exports = app;
