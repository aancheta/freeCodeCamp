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

    //Validate arguments
    let validArg = param.every(a => {
        return typeof(a) == "number" ? true : false;
    });

    if (!validArg) {
        return undefined;
    }

    //Calculate sum
    if (param.length > 1) {
        return param.reduce( (sum, x) => sum += x, 0);
    }
    //If only one argument is supplied
    else {
        return x => addTogether(...param, x); 
    }
}

console.log(addTogether(2)(9));