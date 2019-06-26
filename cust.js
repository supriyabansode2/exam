var express = require('express');
var app = express();

var customerController=function(req, res){
  console.log("Invoking  rest api for product list");
  var customers = [
    {id:1, name:"abc", balance:1123455},
    {id:2, name:"pqr",balance:2345463},
    {id:3, name:"xyz",balance:6544},
    {id:4, name:"lmn",balance:123485},
    {id:5, name:"stu",balance:356896},
  ];
  res.send(customers);
};
app.get ('/customers',customerController);
var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})