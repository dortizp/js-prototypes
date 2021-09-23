// Extend the functionality of the built-in Array class with the following methods:
// square(), cube(), average(), sum(), even() and odd() so all of the expressions below can be executed and returns the expected results.
Array.prototype.square = function () {
  let newArr = [];  
  for (e of this) {
    newArr.push(Math.pow(e,2));
  }
  return newArr;
}

Array.prototype.cube = function () {
  let newArr = [];  
  for (e of this) {
    newArr.push(Math.pow(e,3));
  }
  return newArr;
}

Array.prototype.average = function () { 
    let averag = 0;
    for (e of this) {
      averag += e;
    }
    return averag/this.length;
}

Array.prototype.sum = function () { 
    let sum = 0;
    for (e of this) {
      sum += e;
    }
    return sum;
}

Array.prototype.even = function () {
  let newArr = [];  
  for (e of this) {
    if ((e % 2) === 0) newArr.push(e);
  }
  return newArr;
}

Array.prototype.odd = function () {
  let newArr = [];  
  for (e of this) {
    if ((e % 2) != 0) newArr.push(e);
  }
  return newArr;
}


var numbers = [1, 2, 3, 4, 5];

numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
