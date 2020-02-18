function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  
  //let newarr = [...arr2];
  let newarr = arr2.slice();
  newarr.splice(n,0,...arr1);
  //console.log(arr1);
  //console.log(arr2);
  return newarr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/* Notes: splice() modifies the original array. It's 
return value is the removed elements. slice() creates
a new array which is a copy or subset of the original
array */