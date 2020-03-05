function alphabeticalOrder(arr) {
  // Add your code below this line
  /*
  For alphabetical order we want a-b = negative number such that Array.prototype.sort places a before b. We can't subtract characters but JS can compare Unicode values so we need a<b instead of a-b
  */
    return arr.sort(function(a, b) {
      return a < b ? -1 : (a > b ? 1 : 0);
    });
  // Add your code above this line
}
console.log( alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) );
