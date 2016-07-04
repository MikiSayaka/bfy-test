var express = require('express');
var router = express.Router();

var rtnArr = [
  {
    'product_id': '687563',
    'product_name': 'Philipp Plein High Top Sneaker',
    'product_image': 'http://a2.zassets.com/images/z/3/4/7/3/3/4/3473348-p-MULTIVIEW.jpg',
    'sale_price': '$31,771',
    'product_url': '/product?id=687563'
  },
  {
    'product_id': '1235045',
    'product_name': 'Calvin Klein Jeans Multi Stitch Roll Out',
    'product_image': 'http://a1.zassets.com/images/z/3/6/5/7/8/5/3657853-p-MULTIVIEW.jpg',
    'sale_price': '$2,397',
    'product_url': '/product?id=1235045'
  },
  {
    'product_id': '112124',
    'product_name': 'Travelpro Maxlite® Hardside - 29',
    'product_image': 'http://a1.zassets.com/images/z/3/3/4/0/9/6/3340963-p-MULTIVIEW.jpg',
    'sale_price': '$169.99',
    'product_url': '/product?id=112124'
  }
];

//  TODO  Get order list by using member id.
router.get('/', function(req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(rtnArr));
  res.end();
});

router.post('/', function(req, res) {

  var _reqObj = req.body;
  var _newWishObj = new Object();

  if (_reqObj.action == 'add') {
    _newWishObj.product_id = _reqObj.product_id;
    _newWishObj.product_name = '新商品' + _reqObj.product_id;
    _newWishObj.product_image = 'http://www.backcountry.com/images/items/1200/SFC/SFC005O/ONECOL.jpg';
    _newWishObj.sale_price = '$ 12,000';
    _newWishObj.product_url = '/product';

    rtnArr.push(_newWishObj);
  } else {
    for (var _i = 0; _i < rtnArr.length; _i++) {
      var _item = rtnArr[_i];
      if (_item.product_id == _reqObj.product_id) {
        rtnArr.splice(_i, 1);
      }
    }
  }

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(rtnArr));
  res.end();
});

module.exports = router;
