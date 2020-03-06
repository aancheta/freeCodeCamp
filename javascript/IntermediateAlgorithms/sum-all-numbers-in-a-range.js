/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
  /*
  let result = [...arr].sort( (a,b) => a-b);
  
  for (let i=1; i < result[1]-result[0]; i++) {
    result.push(result[0] + i);
  }

  return result.reduce( (sum, elem) => sum + elem, 0);
  */
  let sum = 0;
  for (let i=Math.min(...arr); i<=Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5,10]));
