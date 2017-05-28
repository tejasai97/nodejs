/*
var counter = require('./count');
var stuff = require('./stuff');
var stuff2 = require('./stuff2');

console.log(counter(['teja','sai','kumar']));

console.log(stuff.counter(['teja','sai','kumar']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));

console.log(stuff2.counter(['teja','sai','kumar']));
console.log(stuff2.adder(5,6));
console.log(stuff2.adder(stuff.pi,5));
*/

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
