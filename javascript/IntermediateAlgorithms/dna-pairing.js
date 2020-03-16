/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {

  //Return either A, T, G, or C
  let getPair = (elem) => {
    if (elem == 'A' || elem == 'T') {
      return ['A','T'].filter(x => x != elem)[0];
    } 
    else if (elem == 'G' || elem == 'C') {
      return ['G','C'].filter(x => x != elem)[0];
    }
  };

  //Loop through DNA strand and return pairs
  return str.split("").map( item => [item,getPair(item)]);
}

console.log(pairElement("GCG"));
