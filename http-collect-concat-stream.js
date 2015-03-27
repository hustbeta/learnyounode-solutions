var concatstream = require('concat-stream');
var http = require('http');

http.get(process.argv[2], function(response) {
    response.pipe(concatstream(function(data) {
        console.log(data.length);
        console.log(data.toString());
    }));
});
