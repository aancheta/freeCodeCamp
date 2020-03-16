/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).
*/

function myReplace(str, before, after) {
  let newWord = word => {
    if (/^[A-Z]/.test(before) && !/^[A-Z]/.test(after)) {
      return after[0].toUpperCase().concat(after.substr(1));
    }
    else {
      return after;
    }
  }

  return str.replace(before, newWord);
  
}

let myStr = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

console.log(myStr);