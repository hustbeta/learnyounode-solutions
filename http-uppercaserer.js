var http = require('http');
var through2_map = require('through2-map');

var server = http.createServer(function(request, response) {
    if(request.method === 'POST') {
        request.pipe(through2_map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});
server.listen(Number(process.argv[2]));
