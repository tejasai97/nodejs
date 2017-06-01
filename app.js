var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

//using middleware
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('index');
});

app.post('/contact',urlencodedParser, function (req, res) {
  res.render('contact-sucess',{data:req.body});
});

app.get('/contact',function(req,res){
  res.render('contact',{qs:req.query});
});

app.get('/profile/:name',function(req,res){
  var data = {age:20,job : 'programmer',hobbies: ['eating','exploring','painting']};
  res.render('profile',{person:req.params.name,data:data});
});


app.listen(3000);
