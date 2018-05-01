const http = require('http');
const twitter = require('twitter');

function req7000(request, response) {
    response.end('Thank you for your Request of port 7000');
}

function req7500(request, response) {
    response.end('Thank you for your Request of port 7500');
}

var server7000 = http.createServer(req7000);
var server7500 = http.createServer(req7500);

server7000.listen(7000, function() {
    console.log('This is port 7000');
});

server7500.listen(7500, function() {
    console.log('This is port 7500');
});
