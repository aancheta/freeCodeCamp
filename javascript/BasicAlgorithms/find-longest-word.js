function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = 0;
  for (let i=0; i<words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
