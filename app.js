
var express = require('express');
var app = express();

app.get('/goods', function (req, res) {
  res.send(JSON.stringify([
              {
                "barcode": "ITEM000000",
                "name": "可口可乐",
                "unit": "瓶",
                "price": 3.00
              },
              {
                "barcode": "ITEM000001",
                "name": "雪碧",
                "unit": "瓶",
                "price": 3.00
              },
              {
                "barcode": "ITEM000002",
                "name": "苹果",
                "unit": "斤",
                "price": 5.50
              },
              {
                "barcode": "ITEM000003",
                "name": "荔枝",
                "unit": "斤",
                "price": 15.00
              },
              {
                "barcode": "ITEM000004",
                "name": "电池",
                "unit": "个",
                "price": 2.00
              },
              {
                "barcode": "ITEM000005",
                "name": "方便面",
                "unit": "袋",
                "price": 4.50
              }
            ]));
});
app.get('/forsave', function (req, res) {
  res.send(JSON.stringify([
                            {
                              "type": "BUY_TWO_GET_ONE_FREE",
                              "barcodes": [
                                "ITEM000000",
                                "ITEM000001",
                                "ITEM000005"
                              ]
                            }
                          ]));
});
app.use(express.static("file"));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});