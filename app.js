var events =require('events');
var util=require('util');

var Person = function(name){
  this.name=name;
};

util.inherits(Person,events.EventEmitter);

var teja= new Person('teja');
var mary= new Person('mary');
var sai= new Person('sai');
var people=[teja,mary,sai];

people.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + ' said: '+ msg);
  });
});

teja.emit('speak','hello');
mary.emit('speak','Im mary');
sai.emit('speak','ola!');
