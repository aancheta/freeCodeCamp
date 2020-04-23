// Telephone Number Validator

function telephoneCheck(str) {
    //The only special word characters allowed are "(", "-", " "
    //Check for non-allowed characters
    let rex1 = /[^-()\s0-9]/;
    if (rex1.test(str)) {
        return false;
    }

    //Phone numbers that start with "1" are potentially valid
    if (str[0] == "1" && str.match(/[0-9]/g).length == 11) {
        return telephoneCheck(str.slice(1).trim());
    }

    //Check for valid number groupings ### ### ####
    let rex2 = /^([(]{0,1})\d{3}(.{0,2})\d{3}(.{0,1})\d{4}$/; //also checks for single "(" at start
    let delArr = str.match(rex2);   // captures delimiters separating numbers
                                    // e.g. delArr = ["(123) 456-7890", "(", ") ", "-"]
    if (!delArr) {
        return false;
    }

    switch (delArr[1]) {
        case "":
            //Case 1: First character in str is a number. 3 valid formats.
            //5555555555 || 555 555 5555 || 555-555-5555
            let del = delArr[2];
            if (del === "" || del === " " || del === "-") {
                return delArr[3] === del ? true : false
            }
            else { return false; }

        case "(":
            //Case 2: First character in str is "(". 2 valid formats.
            //(555)555-5555 || (555) 555-5555
            return delArr[3] === "-" && (delArr[2] === ")" || delArr[2] === ") ") ? true : false
    
        default: //If all else fails I mustv'e missed something, oops
            return "\_^ ^_/";
    }
}

console.log(telephoneCheck(" -123) 456-7890"));