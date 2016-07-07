var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET users listing. */
router.get('/all', function(req, res, next) {
  users.getAll(function(a, b){
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.write(JSON.stringify(b));
    res.end();
  });
});

module.exports = router;
