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
