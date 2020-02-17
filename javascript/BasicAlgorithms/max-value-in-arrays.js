function largestOfFour(arr) {
  let max_arr = [];

  for (let i=0; i<arr.length; i++) {
    max_arr.push(Math.max(...arr[i]));
  }

  return max_arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
