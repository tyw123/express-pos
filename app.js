var redis = require("redis")
    , client = redis.createClient(),saved,gooooods;
    client.on("error", function (err) {
        console.log("Error " + err);
    });
var forsaved=JSON.stringify([
                                      {
                                          type: 'BUY_TWO_GET_ONE_FREE',
                                          barcodes: [
                                              'ITEM000000',
                                              'ITEM000001',
                                              'ITEM000005'
                                          ]
                                      }
                                  ]);
var goods=JSON.stringify([
                                 {
                                     barcode: 'ITEM000000',
                                     name: '可口可乐',
                                     unit: '瓶',
                                     price: 3.00
                                 },
                                 {
                                     barcode: 'ITEM000001',
                                     name: '雪碧',
                                     unit: '瓶',
                                     price: 3.00
                                 },
                                 {
                                     barcode: 'ITEM000002',
                                     name: '苹果',
                                     unit: '斤',
                                     price: 5.50
                                 },
                                 {
                                     barcode: 'ITEM000003',
                                     name: '荔枝',
                                     unit: '斤',
                                     price: 15.00
                                 },
                                 {
                                     barcode: 'ITEM000004',
                                     name: '电池',
                                     unit: '个',
                                     price: 2.00
                                 },
                                 {
                                     barcode: 'ITEM000005',
                                     name: '方便面',
                                     unit: '袋',
                                     price: 4.50
                                 }
                             ]); //不用打双引号，就是这么任性
client.on("connect",runSample);
function runSample() {
    client.set("forsaved",forsaved);
    client.set("goods",goods);


//    client.get("goods",function (req, res) {
//                                                  gooooods=res;
//                                                 });
//
//    client.get("itemp",function (req, res) {
//                                                   s=res;
//                                                  });
}
var express = require('express');
var app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("file"));//

app.get('/goods', function (req, res) {
  client.get("goods",function (er, reply) {
                  res.send(reply);
                          });
});
app.get('/forsave', function (req, res) {
  client.get("forsaved",function (er, reply) {
                  res.send(reply);console.log(reply);
                          });
});
app.get('/input', function (req, res) {
  client.get("itemp",function (er, reply) {
                  res.send(reply);//console.log(reply);
                          });
});
app.post('/itemp', function (req, res) {//req request  res  response 都是报文

  client.set("itemp",req.body.itemp);

});




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

