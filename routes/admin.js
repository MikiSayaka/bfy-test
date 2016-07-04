var express = require('express');
var router = express.Router();

//  TODO  Get order list by using member id.
router.post('/', function (req, res) {
  var _rtnObj = new Object();

  if (true) {
    console.log(req.body.action);
    if (req.body.action == 'add') {
      _rtnObj = req.body;
      _rtnObj.id = '114';
    } else {
      _rtnObj = req.body;
    }

    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.write(JSON.stringify(_rtnObj));
  } else {
    _rtnObj.msg = '更動錯誤';
    res.writeHead(400, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.write(JSON.stringify(_rtnObj));
  }
  res.end();
});

router.get('/', function(req, res) {
  var _rtnArr = [{
    'id': '22',
    'target': '_self',
    'url': '/coupon',
    'isParent': false,
    'name': '折價卷列表',
    'icon': 'fa fa-smile-o fa-fw',
    'desc': '折價卷資料呈獻'
  },{
    'id': '23',
    'target': '_self',
    'url': '/coupon_edit',
    'isParent': false,
    'name': '折價卷編輯',
    'icon': 'fa fa-pencil fa-fw',
    'desc': '折價卷內容編輯'
  },{
    'id': '24',
    'target': '_self',
    'url': '/test',
    'isParent': true,
    'name': '測試',
    'icon': 'fa fa-certificate fa-fw',
    'desc': '測試用'
  },{
    'id': '36',
    'target': '_self',
    'url': '/admin/config/supplier',
    'isParent': false,
    'name': '供應商設定',
    'icon': 'fa fa-dashboard fa-fw',
    'desc': '供應商資料設定'
  },{
    'id': '40',
    'target': '_self',
    'url': '/admin/account/manage',
    'isParent': false,
    'name': '帳號管理',
    'icon': 'fa fa-book fa-fw',
    'desc': '後台帳號管理'
  }];

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnArr));
  res.end();
});

module.exports = router;
