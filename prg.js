var http=require('http');   
var customer =[
{customerID:"1",feedback:"Good",balance:"76509878",company:"xyz",annual_income:"987765434"},
{customerID:"2",feedback:"average",balance:"765098",company:"pqr",annual_income:"987765434"},
{customerID:"1",feedback:"excelent",balance:"7650987834",company:"lmn",annual_income:"98776543453"}
]
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(customer));
};
var server=http.createServer(controller);
server.listen(8000);
console.log("listening on port 8000");
