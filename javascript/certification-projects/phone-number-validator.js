// Telephone Number Validator

function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,    //phone number w/o parentheses
        // (1\s?)? allows for "1" or "1 "
        // \d{3} look for a grouping of 3 digits
        // \d{4}$ must end with a grouping of 4 digits
        // [-\s]? allows for a delimiter of "-" or space
        // \2 repeat the second group ([-\s]?) here
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/; //phone number w/parentheses
        // \s? must have a space or else nothing here

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }
}

console.log(telephoneCheck("1(123)456-7890"));

//I wrote an explanation of why my solution is a little
//better than the one provided by freeCodeCamp. Take a
//look here: 
//https://www.freecodecamp.org/forum/t/js-phone-validator-a-better-solution-imo/377825?u=ancheetah

//(123)-456 7890 should be false
//123 456-7890 should be false
//123-456 7890 should be false
//(555) 555 555 is now true