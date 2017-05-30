var http =require('http');
var fs=require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data',function(chunk){
  console.log('new chunk received:');
  myWriteStream.write(chunk);
});



/*
var server = http.createServer(function(req,res){
  console.log('request was made:' +req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
*/
