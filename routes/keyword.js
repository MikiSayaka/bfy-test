var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//  TODO  Get keyword modify.
router.post('/', function(req, res) {
  var _rtnObj = new Object();
  var _reqObj = req.body;
  var _keyWord = _reqObj.key_word;

  _rtnObj.keyword = _keyWord.toUpperCase();

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
