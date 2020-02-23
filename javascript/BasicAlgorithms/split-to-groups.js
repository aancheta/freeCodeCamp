/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newarr = [];

  for (let i=0; i<arr.length/size; i++) {
    let j=i*size;
    newarr.push(arr.slice(j, j+size));
  }
  return newarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
