/*
1. Factorize each number in array. 
    a) For each number, find all prime numbers up to n
    b) Get modulus of n from each of its prime numbers, p
      b-1)  n%p != 0 for all p? Then n is prime. Collect in a factorization array.
      b-2) n%p === 0 for some p? Then n is not prime.
        i.) Divide n by this p and feed it back into step 1.
2. Find greatest occurence of each prime number overall in the factorizations and multipy together to find LCM
*/


//Find all prime numbers up to and including num
function getPrimes(num) {

    if (num < 2) { return null; }

    //List all integers from 2 up to num
    let list = Array.from(new Array(num - 1), (val, index) => index + 2);

    //Iterate through the list and eliminate numbers that are mutiples of the current element
    for (let i = 0; i < list.length; i++) {
        let div = list[i];
        list = [...list.filter((elem) => elem % div !== 0 || elem === div)];
    }

    return list;
}


//Factorize a number n and store its factors in an array "factors"
//Should intilially be called with only the first parameter. The second parameter is used behind the scenes in recursion.
function factorize(n, factors = []) {

    let primes = getPrimes(n);

    if (!primes) {
        return factors;
    }

    //If n is prime
    if (primes.every(p => n % p != 0)) {
        factors.push(n);
    }
    //If n is not prime keep factorizing recursively
    else {
        //Find the first multiple of n
        let first = primes.find(p => Number.isInteger(n / p));
        factors.push(first);
        factorize(n / first, factors);
    }

    return factors;
}


//Get unique numbers in an arr
function getUnique(arr) {

    let unq = [];
    arr.forEach(elem => {
        if (!unq.some(x => x == elem)) {
            unq.push(elem);
        }
    });

    return unq;
}


//Count the number of times a unique number appears in the factorization
function countUnique(factors, unq) {

    //Initialize count array for unique factors
    let count = new Array(unq.length).fill(0);

    unq.forEach((u, index) => {
        //Count how many times u appears in the factorization
        factors.forEach(f => {
            if (f == u) {
                count[index]++;
            }
        });
    });

    return count;
}

//Main
function smallestCommons(arr) {

    //Expand arr
    let last = Math.max(...arr),
        first = Math.min(...arr);
    let narr = Array.from(new Array(last - first + 1), (val, index) => index + first);

    //Factorize each number in narr and store results in objArr
    let objArr = [];

    narr.forEach(num => {
        let factors = factorize(num);
        let u_arr = getUnique(factors);
        let c_arr = countUnique(factors, u_arr);

        //At this point we don't care about which factors belong to which numbers. We only care about the highest count
        for (let i = 0; i < u_arr.length; i++) {
            objArr.push({ factor: u_arr[i], counts: c_arr[i] });
        }

        return;
    });

    let lcmFactors = getUnique(objArr.map(obj => obj.factor));

    //Multiply each factor by itself the greatest number of times it appears
    let multiples = lcmFactors.map(elem => {
        let fCounts = objArr.filter(obj => obj.factor == elem)
                            .map(obj => obj.counts);

        return elem ** Math.max(...fCounts);
    });

    return multiples.reduce((lcm, elem) => lcm * elem, 1);
} //End of smallestCommons 

console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1,5]));
