// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);
console.log(repeatNum.match(reRegex));

/*
We're looking for the pattern "num space num space num"
\1 represents the first group (\d+)
\2 represents the second group (\s)
Think of \1 and \2 replaced by their literal representations
in the regex and you get the pattern we need.
*/
