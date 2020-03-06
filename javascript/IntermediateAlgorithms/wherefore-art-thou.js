/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {

  let myFunc = (obj) => {
    for (let prop in source) {
      if (!(obj[prop] === source[prop])) {
        return false; //No match, break
      }
    }
    return true; //All source properties matched in obj
  };

  return collection.filter(myFunc);
}

let result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//let result = whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});

console.log(result);
