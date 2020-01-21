//Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

let ohStr = "Ohhhhhhh no";
let ohRegex = /^O(h{3,6})\s(no)$/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);
