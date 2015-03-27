var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data) {
    if(err) {
        console.log(err);
    } else {
        data.forEach(function(value, index){
            if(path.extname(value) === '.' + process.argv[3]) {
                console.log(value);
            }
        });
    }
});
