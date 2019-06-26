var express = require('express');
var app = express();

var employeeController=function(req, res){
  console.log("Invoking  rest api for product list");
  var employees = [
    {id:1, name:"abc", password:1123455},
    {id:2, name:"pqr",password:2345463},
    {id:3, name:"xyz",password:6544},
    {id:4, name:"lmn",password:123485},
    {id:5, name:"stu",password:356896},
  ];
  res.send(employees);
};
app.get ('/employees',employeeController);
var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8089", host, port)
})