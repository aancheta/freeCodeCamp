/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/


function addTogether() {

    let param = [...arguments];
    //console.log(param);

    //Validate arguments
    let validArg = param.every(a => {
        return typeof(a) == "number" ? true : false;
    });

    return !validArg ? undefined 
        : param.length > 1 ? param.reduce((sum, x) => sum += x, 0) //Calculate sum
        : x => addTogether(...param, x); //If only one argument is passed

    /******************** NOTE TO SELF ***********
      I keep forgetting to put "return" BEFORE the if/else statements. It needs to go outside of the conditionals so that something is returned from the conditional statement and passed to the function as a return value.
    /*********************************************
}

console.log(addTogether(2)(9));
console.log(addTogether(4,6));