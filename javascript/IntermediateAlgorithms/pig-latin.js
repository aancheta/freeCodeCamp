function translatePigLatin(str) {
  
  //Is the first letter a consonant or vowel?
  if ( /^[aeiou]/.test(str) ) {
    //If it's a vowel add "way" to the end of the word
    return str.concat("way");
    } else {  //If it's a consonant:

        //If it doesn't have any vowels add "ay" to the end
        if ( !(/[aeiou]/.test(str)) ) {
          return str.concat("ay");
        } else {
          //Take the first consonant (or consonant cluster), move it to the end of the word and suffixes an "ay"
          let consonants = str.match(/[^aeiou]+/);
          return str.substring(consonants[0].length)
                    .concat(consonants)
                    .concat("ay");
        }
    return str;
  }
}

console.log(translatePigLatin("schwartz"));
