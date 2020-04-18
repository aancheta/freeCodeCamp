//This function decodes strings encoded with Ceasar's cipher (shift cipher)
function rot13(str) {
    // Assume input is uppercase and includes special characters
    // 26 = 2*13 = # letters in the alphabet
    // ASCII -> A = 65, Z = 90
    //          at the midpoint M = 77 , N = 78 

    let decoded = '', codept;   //The new, decoded string

    for (let i=0; i<str.length; i++) {
        
       if (/\W/.test(str[i]) ) { //Add non-word character. No change. Add to new string.
        decoded += str[i];  
       } else {
        codept = str.charCodeAt(i);             //Initialize with current codepoint
        codept += (codept > 77) ? -13 : 13      //Subtract if char is > M, otherwise add
        decoded += String.fromCharCode(codept); //Turn the new code point into a char
        
       }
      
    }
  
    return decoded;
  }
  
  console.log(rot13("SERR PBQR PNZC"));