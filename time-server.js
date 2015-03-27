var net = require('net');
var strftime = require('strftime');

var now = function() {
    return strftime('%F %R', new Date()) + '\n';
};

var server = net.createServer(function(socket) {
    socket.end(now());
});
server.listen(process.argv[2]);
