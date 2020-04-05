/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  let ind = arr.findIndex(func);
  return ind === -1 ? [] : arr.slice(ind);
}

let result = dropElements([1, 2, 3], function(n) {return n < 3; });
result = dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
result = dropElements([0,1,0,1], function(n) {return n === 1; });
console.log(result);