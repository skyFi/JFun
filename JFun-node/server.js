var http = require("http");
var fs = require("fs");

function start() {
    http.createServer(onRequest).listen(8888);

    function onRequest(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('hello node');
        response.end();
    }
}

exports.start = start;