var should = require('should');

var a = {super: 'cool'};

var myAss = a.should.have.property('super').ok();

console.log(myAss);