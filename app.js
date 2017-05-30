var fs = require('fs');

//synchronous
//creating
fs.mkdirSync('stuff');
//deleting
fs.rmdirSync('stuff');

//asyncronous
fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writeme.txt',data);
  });
});
//deletion-we cannot delete non-empty directories
fs.unlink('./stuff/writeme.txt',function(){
  fs.rmdir('stuff');
});
