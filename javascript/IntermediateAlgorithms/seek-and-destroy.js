/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/
function destroyer(arr) {

  //Get items to remove from arr
  let narr = [...arguments];
  narr.shift();

  //Filter item from narr out of arr
  return arr.filter( elem => !narr.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
