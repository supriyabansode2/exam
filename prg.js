var http=require('http');   
var customer ={
    customerID:"1",
    feedback:"Good",
	balance:"76509878",
	company:"xyz",
	annual_income:"98776543453"
};
var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(customer));
};
var server=http.createServer(controller);
server.listen(8000);
console.log("listening on port 8000");
