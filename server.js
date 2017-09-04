
// A basic http server

/*var http = require("http");
http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}).listen(8888);
*/
//event-driven Asynchronous callback


var http=require('http');
var url=require('url');

function start(route){
//route request
function onRequest(request,respose){
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");

route(pathname);
//console.log("request recevied");
respose.writeHead(200,{"content_type":"text/plain"});
respose.write("hello world");
respose.end();
}
http.createServer(onRequest).listen(8888);
console.log("server started");
}
exports.start=start;


