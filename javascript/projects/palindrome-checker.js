/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {

  //Remove special characters and white space
  let rex = /[\W_]/; //a non word character
  let arr = str.toLowerCase().split('')
                .filter( char => rex.test(char) ? false : true );

  //Check if it is a palindrome
  //Start at the end of the array and attempt to match with 
  //the beginning of the array
  let start = 0;
  for (let end=arr.length-1; end >= 0; end--) {
    if (arr[end] == arr[start]) {
      start++;
    } 
    else {
      return false;
    }
  }
                
  return true;
}



console.log(palindrome("five|\_/|four"));
