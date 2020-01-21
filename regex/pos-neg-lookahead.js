//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, 
//do not begin with numbers, and have two consecutive digits.

let sampleWordArr = ["astronaut", "airplanes", "banan1", "bana12", "abc123", "123", "1234", "8pass99", "12abcde"];
let pwRegex = /(?=\w{6,})^[a-z](?=\w*\d{2})/i; //or /(?=\w{6,})(?=^\D+\d{2})/i
let result = [];

for (let i=0; i<sampleWordArr.length; i++) {
    result.push(pwRegex.test(sampleWordArr[i]));
}

console.log(result);