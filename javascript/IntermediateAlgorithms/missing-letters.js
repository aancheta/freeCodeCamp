/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  //assume there is only one letter missing and all letters are lower case

    for (let i=0; i<str.length-1; i++) {
      let letter = str.charCodeAt(i);
      if (str.charCodeAt(i+1)-letter != 1) {
        return String.fromCharCode(letter+1);
      }
    }
  return undefined;

}

console.log(fearNotLetter("abcde"));

//Method 1
/*
  for (let i=0; i<str.length-1; i++) {
    let letter = str.charCodeAt(i);
    if (str.charCodeAt(i+1)-letter != 1) {
      let before = str.slice(0,i+1);
      let after = str.slice(i+1);
      return before.concat(String.fromCharCode(letter+1)).concat(after);
    }
  }
  */

  /*
  //Method 2
  //Alternative using findValue
  //Note: This doesn't quite work yet. Need to tinker with case: no letters missing
  let arr = str.split("");

  //Find diff in point values
  let missing = arr.findIndex( (elem, index, arr) => {
    return arr[index+1].charCodeAt(0) - arr[index].charCodeAt(0) != 1;
  });
 
  let newLetter = String.fromCharCode(str.charCodeAt(missing)+1);

  //Insert missing letter and return a new string
  arr.splice(missing+1, 0, newLetter);
  return arr.join("");
  */
