var express = require('express');
var Iconv = require('iconv').Iconv;
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFileSync_encoding('index.html', "string"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function readFileSync_encoding(filename, encoding) {
    var content = fs.readFileSync(filename);
    var iconv = new Iconv(encoding, 'UTF-8');
    var buffer = iconv.convert(content);
    return buffer.toString('utf8');
}
