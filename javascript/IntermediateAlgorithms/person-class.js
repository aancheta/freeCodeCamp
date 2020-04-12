/*
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

//Solution 1: Regex method

var Person = function(firstAndLast) {
  
  //Initialize private variables
  let firstName = firstAndLast.match(/^\w+/)[0];
  let lastName = firstAndLast.match(/\w+$/)[0];
  let fullName = firstAndLast;

  //Get functions
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => fullName;

  //Set functions
  this.setFirstName = (first) => {
    firstName = first;
    fullName = firstName.concat(" ",lastName);
  }
  this.setLastName = (last) => {
    lastName = last;
    fullName = firstName.concat(" ", lastName);
  }
  this.setFullName = (firstAndLast) => {
    fullName = firstAndLast; 
    firstName = firstAndLast.match(/^\w+/)[0];
    lastName = firstAndLast.match(/\w+$/)[0];
  }

};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);

console.log(bob.getFirstName());
console.log(bob.getFullName());

bob.setFirstName("Haskell");
console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getLastName());
