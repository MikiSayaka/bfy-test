var express = require('express');
var router = express.Router();

//  TODO  Get login information.
router.post('/', function(req, res) {
  var _rtnObj = new Object();

  if (true) {
    _rtnObj.action = 'refresh';
    _rtnObj.action_url = '';
  } else {
    _rtnObj.action = 'redirect';
    _rtnObj.action_url = '/product';
  }


  if (false) {
    _rtnObj.msg = '';
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  } else {
    _rtnObj.msg = 'Error';
    res.writeHead(400, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  }
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

router.get('/check', function(req, res) {
  var _rtnObj = {
    'status': false
  };
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
