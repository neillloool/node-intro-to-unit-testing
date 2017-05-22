const should = require('chai').should();

const adder = require('../adder');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz for multiples of 15' , function() {
    // range of normal inputs, including
    // notable cases like negative answers
     [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return buzz for multiples of 5', function() {
   [5, 10, 15].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });
 it('should return fizz for multiples of 3' , function() {
    // range of normal inputs, including
    // notable cases like negative answers
  // range of bad inputs where not both are numbers
   [3, 6, 9].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
  });
  });

  it('should return number if not mult of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});


