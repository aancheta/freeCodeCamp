/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newarr = [];

  for (let i=0; i<arr.length; i++) {

    if (arr[i]) {
      newarr.push(arr[i]);
    }
  
  }
  return newarr;
}

console.log(bouncer([null, NaN, 1, 2, undefined]));
//[7, "ate", "", false, 9]
//["a", "b", "c"]
//[false, null, 0, NaN, undefined, ""]
//[null, NaN, 1, 2, undefined]