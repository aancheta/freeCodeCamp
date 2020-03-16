/*
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {

  //List all integers from 2 up to num
  let list = [2];
  for (let i=2; i<num; i++) {
    list.push(i+1);
  }

  //Find prime numbers
  //Iterate through the list and eliminate numbers that are mutiples of the current element
  for (let i=0; i<list.length; i++) {
    //console.log(`i = ${i}, newArr.length = ${newArr.length}`);
    let div = list[i];
    //console.log(div);
    list = [div, ...list.filter( (elem) => elem % div !== 0 )]
    //console.log(newArr);
  }

  //Get sum of prime numbers <= num
  return list.reduce( (sum, elem) => sum + elem, 0);
}

console.log(sumPrimes(10));
