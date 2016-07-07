var mysql = require('mysql');
var async = require('async');
var TEST_DB = 'MIKI_TEST';
var state = {
  pool: null,
  mode: null
};

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'a8965128',
    password: '',
    database: TEST_DB
  });

  state.mode = mode;
  done();
}

exports.get = function() {
  return state.pool;
}