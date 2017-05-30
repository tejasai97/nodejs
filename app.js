var fs = require('fs');

//syncronous
var readme = fs.readFileSync('readme.txt','utf8');
fs.writeFileSync('writeme.txt',readme);

//asyncronous -continue lines below without blocking
fs.readFile('readme.txt','utf8',function(err,data){
  fs.writeFile('writeme.txt',data);
});
