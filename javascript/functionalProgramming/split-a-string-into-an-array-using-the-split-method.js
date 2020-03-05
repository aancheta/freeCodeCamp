/*
Strings are immutable.

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
*/

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/) //\W == [^\w] non-word char
  // Add your code above this line
}

let str = "Hello World,I-am code";
console.log(str);
console.log(splitify(str));
