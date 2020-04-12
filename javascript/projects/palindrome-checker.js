/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

//Solution 2: Instantaneous comparison is more efficient for very long strings

function palindrome(str) {

    //Check if it is a palindrome
    //Start at the end of the array and attempt to match with characters at
    //the beginning of the array
    let start = 0;

    for (let end = str.length - 1; end > start; end--) { //Note the new stopping point

        //Skip special characters and whitespace
        while (/[\W\s_]/.test(str[start])) {
            start++;
        }

        while (/[\W\s_]/.test(str[end])) {
            end--;
        }

        //Compare valid characters at the front and back of the string
        if (str[end].toLowerCase() == str[start].toLowerCase()) {
            start++; //In the next loop, move on to the next character from the front of the string
        //Stop checking if characters don't match
        } else {
            return false;
        }
    }

    //The entire string has been evaluated successfully from front to back
    return true;
}

console.log(palindrome("taco\|ca t_"));
console.log(palindrome("A man, a plan, a canal. Panama"));