var express = require('express');
var router = express.Router();

//  TODO  Get order list by using member id.
router.post('/', function(req, res) {
  var _rtnArr = new Array();
  var _rtnObj;

  for (var _i = 0; _i < 6; _i++) {
    _rtnObj = new Object();
    _rtnObj.coupon_seq = _i;
    _rtnObj.coupon_name = '客服補發';
    _rtnObj.coupon_value = '$200';
    _rtnObj.coupon_restrict = '限個人';
    _rtnObj.coupon_start = '2015-05-16';
    _rtnObj.coupon_end = '2015-06-16';
    _rtnObj.coupon_status = '已使用於：C20150516263400125';
    _rtnArr.push(_rtnObj);
  }

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnArr));
  res.end();
});

router.post('/identityCouponId', function(req, res) {
  var _reqBody = req.body;
  var _rtnObj = new Object();

  if (_reqBody.coupon_id == 'test1') {
    res.writeHead(400, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    _rtnObj.msg = 'Coupon Id ' + _reqBody.coupon_id + ' has been conflicted.';
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    _rtnObj.msg = '';
  }

  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
