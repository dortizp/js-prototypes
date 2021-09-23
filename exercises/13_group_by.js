// Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of 
// evaluating a function on each element.
// The method should return an object, in which for each different value returned by the function there is
// a property whose value is the array of elements that return the same value.
// If no function is passed, the element itself should be taken.

Array.prototype.groupBy = function () {
  let result = {};
  let newArr = this.sort((a,b) => a-b); // [1,1,1,2,2,3,4,5,6]
  let keys = new Set(newArr);
  for (el of keys) {
    result[el] = newArr.filter( x => x == el); 
  }
  return result;
}

[1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy()
  // {
  //   1: [1, 1, 1],
  //   2: [2, 2],
  //   3: [3],
  //   4: [4],
  //   5: [5],
  //   6: [6]
  // }

  Array.prototype.groupBy = function(func) {
    let newHash = {};
    for (e of this) {
      if (!newHash[func(e)]) newHash[func(e)] = [e];
      else newHash[func(e)].push(e);
      console.log(newHash);
    }
    return newHash;
  }

[ (1, 2, 3, 2, 4, 1, 5, 1, 6)
].groupBy(function (val) {
  return val % 3;
});
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }
