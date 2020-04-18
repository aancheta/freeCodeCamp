//This function decodes strings encoded with Ceasar's cipher (shift cipher)
function rot13(str) {
    // Assume input is uppercase and includes special characters
    // 26 = 2*13 = # letters in the alphabet
    // ASCII -> A = 65, Z = 90
    //          at the midpoint M = 77 , N = 78 = 2*26

    // A % 26 = 13 --> 65 + 13 = 78 = N
    // N % 26 = 0  --> 65 + 0  = 65 = A
    // Z % 26 = 12 --> 65 + 12 = 77 = M

    //Can use replace() here because strings are immutable. replace() returns 
    //a new string and takes a value or regex as the first argument
    return str.replace(/[A-Z]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) % 26 + 65); 
    });

  }
  
  console.log(rot13("SERR PBQR PNZC"));