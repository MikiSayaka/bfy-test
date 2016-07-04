var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var _rtnObj = [{
    'id': '1',
    'name': '上午06:00 ~ 中午12:00'
  },{
    'id': '2',
    'name': '中午12:00 ~ 下午16:00'
  },{
    'id': '3',
    'name': '下午16:00 ~ 下午20:00'
  }];

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
