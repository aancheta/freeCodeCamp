/*
Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName parameter.
*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add (bookList, bookName) {
  //let newList = [...bookList, bookName];
  return [...bookList, bookName];
  // Add your code above this line
}


//console.log(add(bookList, "My Book"));
//console.log(bookList);

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
  let listCopy = [...bookList];
  if (listCopy.indexOf(bookName) >= 0) {
    listCopy.splice(listCopy.indexOf(bookName), 1);
    return listCopy;

    // Add your code above this line
    }
}
//console.log(remove(bookList, "The Hound of the Baskervilles"));
//console.log(bookList);

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(`bookList = ${bookList}`);
console.log(`newBookList = ${newBookList}`);
console.log(`newerBookList = ${newerBookList}`);
console.log(`newestBookList = ${newestBookList}`);