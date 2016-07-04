var express = require('express');
var router = express.Router();

//  TODO  Get order list by using member id.
router.post('/', function(req, res) {
  var _rtnArr = new Array();
  var _rtnObj;

  for (var _i = 0; _i < 6; _i++) {
    _rtnObj = new Object();
    _rtnObj.order_no = '160429174539524' + _i;
    _rtnObj.order_date = '2016-04-29 17:46';
    _rtnArr.push(_rtnObj);
  }

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnArr));
  res.end();
});

router.post('/addr_info_modify', function(req, res) {
  var _rtnObj = new Object();
  _rtnObj.message = 'success';

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

router.post('/delivery_info_modify', function(req, res) {
  var _rtnObj = new Object();
  _rtnObj.message = 'success';

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

router.post('/invoice_info_modify', function(req, res) {
  var _rtnObj = new Object();
  _rtnObj.message = 'success';

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
