function titleCase(str) {
  //Convert sentence to lowercase and array
  let words = str.toLowerCase().split(/\s/);

  let newStr = '';
  let len = words.length;

  for (let i=0; i<len; i++) {
    let first = words[i][0];

    //Change first letter to uppercase
    newStr += words[i].replace(first, first.toUpperCase());
      /* Notes: .replace() will only replace the first instance
      of the letter in the string. Use a regex parameter in the  
      replace method to modify other instances. */

    if (i == len-1) {
      return newStr;
    } else { //Add whitespace between words
      newStr += ' ';
    }
  }

}

console.log(titleCase("I'm a little tea pot."));
var str = 'little';
console.log(str.replace(/l/g, 'l'.toUpperCase()))
