/*
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  
  //Initialize private variables
  let firstName, lastName, fullName;

  function splitNames(full) {
    let nameArr = full.split(" ");
    fullName = `${nameArr[0]} ${nameArr[1]}`;
    firstName = nameArr[0];
    lastName = nameArr[1];
  }
  
  splitNames(firstAndLast);
  
  //Get functions
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => fullName;

  //Set functions
  this.setFirstName = (first) => {
    firstName = first;
    fullName = `${firstName} ${lastName}`;
  }
  this.setLastName = (last) => {
    lastName = last;
    fullName = `${firstName} ${lastName}`;
  }
  this.setFullName = (firstAndLast) => {
    splitNames(firstAndLast);
  }

};

var bob = new Person('Bob Ross');

//Tests

console.log(Object.keys(bob).length);
console.log(bob instanceof Person);

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName("Haskell");
console.log(bob.getFullName());

bob.setLastName("Curry");
console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
