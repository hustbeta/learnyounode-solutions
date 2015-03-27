var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    var urlobj = url.parse(request.url, true);
    var date = new Date(urlobj.query.iso);
    var ret;
    switch(urlobj.pathname) {
    case '/api/parsetime':
        ret = JSON.stringify({
            'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds(),
        });
        break;
    case '/api/unixtime':
        ret = JSON.stringify({
            'unixtime': date.getTime(),
        });
        break;
    default:
        return;
    }
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(ret);
});
server.listen(Number(process.argv[2]));
