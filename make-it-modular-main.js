var mymodule = require('./make-it-modular-mymodule');

mymodule(process.argv[2], process.argv[3], function(err, data) {
    if(err) {
        console.log(err);
    } else {
        data.forEach(function(value, index) {
            console.log(value);
        });
    }
});
