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
    if (num < 2) {
        return null;
    }

    //List all integers from 2 up to num
    let list = [2];
    for (let i = 2; i < num; i++) {
        list.push(i + 1);
    }
    
    
    //Iterate through the list and eliminate numbers that are mutiples of the current element
    for (let i = 0; i < list.length; i++) {
        div = list[i];
        list = [...list.filter((elem) => elem % div !== 0)]
    }
    console.log("primes = " + list + " for n = " + num);

    return list;
}


//Factorize a number n and store its factors in an array "factors"
function factorize(n, factors = []) {

    let primes = getPrimes(n);
    //console.log(primes);

    //If n is 0 or 1 then it can not be factorized any further
    if (!primes) {
    //console.log('in factorize()');
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
        //console.log(first);
        factors.push(first);
        factorize(n / first, factors);
    }

    return factors;
}

//Get unique numbers in an arr
function getUnique(arr) {
    

	let unq = [];
	arr.forEach( elem => {
		if (!unq.some( x => x == elem)) {
			unq.push(elem);
		}
	});
	
    return unq;
    //unq.length == 1 ? unq[0] : unq
}

//Count the number of times a unique number appears in the factorization
function countUnique(factors, unq) {
    //if (factors.length == 1 && unq.length == 1) { return 1; }
	
    let count = new Array(unq.length).fill(0);
	
    //Iterate through unique factors
	unq.forEach( (u, index) => {
		//Count how many times elem appears in the factorization
		factors.forEach( f => {
			if (f == u) {
				count[index]++;
			}
		});
	});
	//console.log(count);
	return count;
    //count.length == 1 ? count[0] : count
}

function smallestCommons(arr) {

    //Expand arr
    let last = Math.max(...arr), first = Math.min(...arr);
    let narr = [first];
    for (let i=first; i<last; i++) {
        narr.push(i+1);
    }
    //console.log("narr = " + narr);


    //Factorize each number in narr
    let objArr = [];

    let result = narr.map( num => {
        console.log(`factorize (${num})`);
        let factors = factorize(num);
        let u_arr = getUnique(factors);
        let c_arr = countUnique(factors, u_arr);
        //console.log(u_arr);
        
        
        let cc = ( function () {
                //let objArr = [];
                for (let i=0; i<u_arr.length; i++) {
                    objArr.push({factor: u_arr[i], counts: c_arr[i]});
                }
                return;
            })();

        //console.log(objArr); 

        //return cc; 

        // return {
        //     number: num,
        //     counts: cc
        // };

        return;
        
    }); //end of narr.map()
    //At this point we don't care about which factors belong to which numbers. We only care about the highest count

    //Find greastest occurence of each prime number in u_arr for each num in narr
    //console.log(objArr);
    let lcmFactors = getUnique(objArr.map( obj => obj.factor));
    let maxCounts = [];
    //console.log(objArr);
    let multiples = lcmFactors.map( elem => {
        console.log('unique = ' + elem);
        let fCounts = objArr.filter(obj => obj.factor == elem)
                            .map(obj => obj.counts);
        console.log(fCounts);
        maxCounts.push(Math.max(...fCounts));
        return elem ** Math.max(...fCounts);
    });
    

    console.log(multiples);
    return multiples.reduce( (lcm, elem) => lcm * elem, 1 );

    //return maxCounts.reduce( (lcm, elem) => lcm * lcmFactors**elem, 1);;
}

//console.log(getPrimes(20));
// let factors = factorize(765);
// let unique = getUnique(factors);
//let count = countUnique(factors, unique);
//console.log(factors, unique, count);
console.log(smallestCommons([2,10]));
