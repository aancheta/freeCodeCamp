/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
*/

function sumFibs(num) {
	if (num === 0 || num === 1) return 1;
	let seq = [1,1], i=0;

	do {
		seq.push(seq[i] + seq[i+1]);
		i++;
	} while (seq[i] + seq[i+1] <= num);

	return seq.filter(elem => elem % 2 !== 0)
	.reduce( (sum,elem) => sum + elem, 0);
}

console.log(sumFibs(1000));
