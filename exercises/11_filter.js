// Implement our beloved Array filter from scratch, overriding the existing filter method.
// Methods not allowed for this solution:
// Array.prototype.filter
// Array.prototype.forEach

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower_than_six = (x) => x < 6;
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5];
