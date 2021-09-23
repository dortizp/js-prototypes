// Implement our beloved Array map from scratch, overriding the existing map method.
// Methods not allowed for this solution:
// Array.prototype.filter
// Array.prototype.forEach

Array.prototype.map = function (func) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(func(this[i]));
  }
  return newArr;
};

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var multiply_by_two = function (x) {
  return x * 2;
};
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
// Expected
//[2, 4, 6, 8, 10, 12, 16, 18];

console.log(one_to_nine_doubled)