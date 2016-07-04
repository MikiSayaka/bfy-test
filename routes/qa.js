var express = require('express');
var router = express.Router();

router.post('/list', function(req, res) {
  var _rtnArr = [
    {
      'order_no': '1605131813065172',
      'order_seq': '1',
      'ask_content': ''
    },
    {
      'order_no': '1604291745395241',
      'order_seq': '2',
      'ask_content': ''
    },
    {
      'order_no': '1604291745395244',
      'order_seq': '3',
      'ask_content': ''
    }
  ];
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnArr));
  res.end();
});

router.post('/detail', function(req, res) {
  var _rtnObj = {
  "msg": "",
  "msg_code": "",
  "order_no": "xxxxxxxx",
  "order_seq": "xxxxxxxx",
  "list": [
      {
        "question": [
          {
            "id": "001",
            "title": "test001",
            "type": "配送進度",
            "answered": true,
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/eV7UHZG.png"
              },{
                "id": "02",
                "url": "http://i.imgur.com/rNeiimv.png"
              }
            ]
          }, {
            "id": "002",
            "title": "test002",
            "type": "網站操作問題",
            "answered": true,
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/aeFhqHi.png"
              }
            ]
          }, {
            "id": "003",
            "title": "test003",
            "type": "查詢行銷活動",
            "answered": true,
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/ERupdVV.png"
              },{
                "id": "02",
                "url": "http://i.imgur.com/0Jxi2lA.png"
              }
            ]
          }
        ],
        "answer": [
          {
            "id": "001",
            "title": "test001",
            "type": "網站操作問題",
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/yIzPDJt.png"
              },{
                "id": "02",
                "url": "http://i.imgur.com/CCZpkXK.png"
              }
            ]
          }, {
            "id": "002",
            "title": "test002",
            "type": "查詢行銷活動",
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/6Wqmz0H.jpg"
              },{
                "id": "02",
                "url": "http://i.imgur.com/kVe4Lyq.jpg"
              }
            ]
          }
        ]
      } , {
        "question": [
          {
            "id": "001",
            "title": "test001",
            "type": "配送進度",
            "answered": false,
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/cWF8YIj.jpg"
              },{
                "id": "02",
                "url": "http://i.imgur.com/Kp4XWWE.jpg"
              }
            ]
          }, {
            "id": "002",
            "title": "test002",
            "type": "網站操作問題",
            "answered": false,
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/Kk6T0oS.jpg"
              },{
                "id": "02",
                "url": "http://i.imgur.com/igVRt9n.jpg"
              }
            ]
          }
        ],
        "answer": []
      } , {
        "question": [
          {
            "id": "001",
            "title": "test001",
            "type": "配送進度",
            "answered": true,
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/AowT5q7.jpg"
              }
            ]
          }
        ],
        "answer": [
           {
            "id": "001",
            "title": "test001",
            "type": "網站操作問題",
            "pic": [
              {
                "id": "01",
                "url": "http://i.imgur.com/bRdOS6g.jpg"
              },{
                "id": "02",
                "url": "http://i.imgur.com/nqwAGJp.jpg"
              }
            ]
          } 
        ]
      }
    ]
  };

  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
  res.write(JSON.stringify(_rtnObj));
  res.end();
});

module.exports = router;
