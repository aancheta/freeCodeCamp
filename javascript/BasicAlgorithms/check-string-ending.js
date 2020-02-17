function confirmEnding(str, target) {
 
  let myRegex = new RegExp(target + '\$')
  return myRegex.test(str);

}

console.log(confirmEnding("Open sesame", "same"));
