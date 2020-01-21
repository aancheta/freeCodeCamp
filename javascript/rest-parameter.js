const sum = (...args) => args.reduce((total, num) => total + num, 0);

console.log(sum(0,1,2)); // 6
