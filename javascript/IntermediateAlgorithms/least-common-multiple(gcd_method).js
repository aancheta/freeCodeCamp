//Least common multiple (lcm) of an array of numbers
//Method 2: Using the greatest common divisor (gcd)
//			lcm(a,b) = (a*b)/gcd(a,b)
//lcm is recursive:
//			lcm(x_1, x_2, ..., x_n) = lcm{ lcm[ (x_1, x_2,..., x_n-1), x_n ] }
//			https://en.wikipedia.org/wiki/Least_common_multiple#Other

function smallestCommons(arr) {

    //Expand arr in descending order
    let max = Math.max(...arr);
    let list = Array.from(new Array(Math.abs(arr[1] - arr[0]) + 1), (val, index) => max - index);
    //console.log(list);

    //Greatest common divisor of two numbers
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);

    //Least common multiple of two numbers
    const lcm = (a, b) => a * b / gcd(a, b);

    let i = 1;
    let testLCM = max;

    do {
        let listLCM = lcm(testLCM, list[i]);
        //console.log(`loop ${i}; lcm(${testLCM},${list[i]})`);

        //If testLCM is a multiple of the rest of list then we've found listLCM
        if (list.slice(i + 1).every(x => listLCM % x === 0)) {
            return listLCM;
        } 
        //Continue searching for list LCM
        else { 
            testLCM = listLCM;
        }

        i++
    }
    while (i < list.length);

}


//Test here
console.log(smallestCommons([23, 18])); //n loops = 50