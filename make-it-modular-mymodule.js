var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
    fs.readdir(dirname, function(err, data){
        if(err) {
            return callback(err);
        } else {
            l = [];
            data.forEach(function(value, index) {
                if(path.extname(value) === '.' + ext) {
                    l.push(value);
                }
            });
            return callback(null, l);
        }
    });
}
