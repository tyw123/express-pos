var redis = require("redis")
    , client = redis.createClient();
    client.on("error", function (err) {
        console.log("Error " + err);
    });

var express = require('express');
var app = express();
var http = require('http');
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("file"));

app.get('/goods', function (req, res) {
var body = '';
 http.get({
        host: 'localhost',
        port:'8080',
        path: '/base/helloworld/all_item'
    }, function(b) {
        b.on('data', function(d) {
                    body += d;
                    console.log(body);
                });
                b.on('end', function() {
                res.send(body);debugger
                });
    });

});
app.get('/forsave', function (req, res) {
var body = '';
 http.get({
        host: 'localhost',
        port:'8080',
        path: '/base/helloworld/promotion'
    }, function(b) {
        b.on('data', function(d) {
                    body += d;
                    console.log(body);
                });
                b.on('end', function() {

                res.send(body);debugger
                });
    });

});

app.get('/input', function (req, res) {
  client.get("itemp",function (er, reply) {
                  res.send(reply);//console.log(reply);
                          });
});

app.post('/itemp', function (req, res) {//req request  res  response 都是报文
//client.set("itemp",req.body.itemp);
  var Client = require('node-rest-client').Client;
  var client = new Client();

//  var a=[1,1,0];
//  var test=JSON.stringify(a);
//  console.log(a);
  //记得改程序之后重新启动服务

  var postData = require('querystring').stringify({ itemp:req.body.itemp });
   console.log(postData);
   console.log(typeof(postData));
   console.log(postData.length);
  // set content-type header and data as json in args parameter
  var args = {
    data: postData,
   //data:test,
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"

    }
  };
  client.registerMethod("postMethod", "http://localhost:8080/base/helloworld/input", "POST");

  client.methods.postMethod(args, function(data,response){
  	// parsed response body as js object
  	console.log(JSON.stringify(data));
  	// raw response
  	res.send(data);
  });
});

app.get('/test', function (req, res) {
var body = '';
 http.get({
        host: 'localhost',
        port:'8080',
        path: '/base/helloworld/promotion'
    }, function(b) {
        b.on('data', function(d) {
                    body += d;
                    console.log(body);
                });
                b.on('end', function() {
                  var tt=typeof(body);
                  var te=JSON.parse(body);
                  var tte=typeof(te);
                  console.log(tt);
                  console.log(tte);
                res.send(body);
                });
    });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

