/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  let allNum = [...arr], unique = [];

  //Combine all input into one array
  for (let i=0; i < arguments.length; i++) {
    allNum = allNum.concat(...arguments[i]);
  }

  //Push unique numbers to unique
  allNum.map( elem => {
    if(!unique.includes(elem)) {
      unique.push(elem);
    }
  });

  return unique;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
