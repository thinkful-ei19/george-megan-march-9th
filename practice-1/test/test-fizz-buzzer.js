'use strict';

const chai = require('chai');
const expect = chai.expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzz Function', function(){
  it('If there is no number, return an error', function(){
    expect(()=>fizzBuzzer('hi')).to.throw();
  }); 

  it('If the number is divisible by 10 or 5 return fizz-buzz', function(){
    expect(fizzBuzzer(30)).to.equal('fizz-buzz');
  });

  it('if number is divisible by 5, return buzz', function(){
    expect(fizzBuzzer(5)).to.equal('buzz');
  });

  it('if number is divisible by 3, return fizz', function(){
    expect(fizzBuzzer(3)).to.equal('fizz');
  });
 
  it('if number is a number, but not divisible by 3, 5, or 15; return that number', function(){
    expect(fizzBuzzer(4)).to.equal(4);
  });

});