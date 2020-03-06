/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];

  const crossChk = (a, b) => {
    //Loop through array "a"
    a.forEach( elem => {
      //Find items in array "b" that are not in "a"
      if (!(b.includes(elem))) {
        newArr.push(elem);
      }
    });
  } 

  crossChk(arr1, arr2);
  crossChk(arr2, arr1);
    
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]));

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

