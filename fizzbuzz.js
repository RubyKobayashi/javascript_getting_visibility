function FizzBuzz(){};

FizzBuzz.prototype.play = function(number) {
  var otherNumber = number - 50;
  // console.log("hello0")
  // console.log(this);
  if (this._isDivisibleBy(15, number)) {
    // console.log("hello1")
    // console.log(this);
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    // console.log("hello2")
    // console.log(this);
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    // console.log("hello2.5")
    // console.log(this);
    return 'Fizz';
  } else {
    // console.log("hello3")
    // console.log(this);
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  // console.log("hello4")
  // console.log(this);
  return number % divisor === 0;
}

fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  // console.log("hello5")
  // console.log(this);
  console.log(fizzBuzz.play(i));
  // console.log("hello6")
  // console.log(this);
}
