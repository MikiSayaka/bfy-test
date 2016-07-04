var express = require('express');
var router = express.Router();

//  TODO  Get order list by using member id.
router.post('/', function(req, res) {
  var postdata = req.body;

  var _rtnObj = {
    "page": 1,
    "total_page": 24,
    "total_record": 123442,
    "item_per_page": 10,
    "list": [
      {
        "price": -40,
        "name": "購買花費(<a press=\"order_no\" target-attr=\"query-info\" value-input=\"order_query_info\" class=\"autoFind\">1604071219411994</a>)",
        "date": "2015/11/13"
      },
      {
        "price": 500,
        "name": "滿萬送五百",
        "date": "2015/07/10"
      },
      {
        "price": 300,
        "name": "入會贈品",
        "date": "2015/04/20"
      }
    ]
  };

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
