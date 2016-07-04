var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var _rtnObj = [{
    'id': '1',
    'name': '2-copies'
  },{
    'id': '2',
    'name': '3-pieces'
  }];

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
