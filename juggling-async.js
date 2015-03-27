var bl = require('bl');
var http = require('http');

var ret1 = null, ret2 = null, ret3 = null;

var check_result = function(str) {
    if(ret1 && ret2 && ret3) {
        //console.log('------' + str)
        console.log(ret1);
        console.log(ret2);
        console.log(ret3);
    }
}

var get_data1 = function(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            console.error(err);
            return;
        } else {
            ret1 = data.toString();
            check_result(1);
        }
    }));
}

var get_data2 = function(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            console.error(err);
            return;
        } else {
            ret2 = data.toString();
            check_result(2);
        }
    }));
}

var get_data3 = function(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            console.error(err);
            return;
        } else {
            ret3 = data.toString();
            check_result(3);
        }
    }));
}

http.get(process.argv[2], get_data1);
http.get(process.argv[3], get_data2);
http.get(process.argv[4], get_data3);
