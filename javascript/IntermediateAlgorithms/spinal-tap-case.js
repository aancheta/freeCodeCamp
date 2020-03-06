/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  let words = str.match(/[A-Z]*[a-z]+/g);
  return words.join("-").toLowerCase();
}

spinalCase('ThisIs Spinal-tap');
