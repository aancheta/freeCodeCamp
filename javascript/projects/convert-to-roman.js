function convertToRoman(num) {
    
    //Determine the roman numeral representation for each of these and combine them to get the result


    //Input validation
    if (num < 1 || num >= 4000) {
        console.log("Sorry. This program can only handle numbers between 1-3999");
        return undefined;
    }

    let digits = num.toString().length;
    let newnum, arr = [];

    //Break num up into thousands, hundreds, tens, and ones
    if (digits == 1) { 
    	arr = [num]; 
    } 
    else {
        for (let i = digits; i > 0; i--) {
            if (i == digits && digits > 1) {
                newnum = num;
                //console.log(newnum, result);
            } 
            else {
                newnum %= Math.pow(10, i);
                //console.log(newnum,result);
            }
            if (newnum > 0) { arr.push(newnum - (newnum % Math.pow(10, i - 1))); }
        }
        

        }

        arr = arr.filter(x => x > 0);
        
    

    console.log(arr); //[ones, tens, hundreds, thousands]

    let objarr = [
        { sym: 'I', range: [1, 4] }, // 4 = IV
        { sym: 'V', range: [5, 9] }, // 9 = IX
        { sym: 'X', range: [10, 40] }, // 40 = XL
        { sym: 'L', range: [50, 90] }, // 90 = XC
        { sym: 'C', range: [100, 400] }, // 400 = CD
        { sym: 'D', range: [500, 900] }, // 900 = CM
        { sym: 'M', range: [1000, 3999] }
    ];

    //let len = objarr.length;

    //notice the geometric sequences above
    //I'll call them seq10 = 1,10,100,1000 --> 0 and even i
    //and seq5 = 5,50,500 --> odd i
    //can ID sequences using even/odd indices or 
    //another test: log_10(range[0]) == Math.Int() ? if yes then it is in seq10


    //Convert to roman numerals
    

	    //Is n at the end of the range (i.e. n == range[1])?
	    //Yes: (case - subtraction)
		    //Is range[0] of the current object in seq5?
		    //yes (V,L,D): sym before + sym after
		    //no (I,X,C,M): current symbol + next symbol 
	    //No: continue

	    //Is range[0] of the current obj in seq5?
		    //Yes: (addition) current sym + previous sym
		    //No: Repeat the current symbol up to three times
    let symarr = arr.map((n, ni) => {
    //let chars = '';

    //Find the range in the obj arr (roman) that n falls in 
    let oi = objarr.findIndex(obj => n >= obj.range[0] && n <= obj.range[1]);
    let obj = objarr[oi];


    //Is n at the end of the range (i.e. n == range[1])?
    if (n === obj.range[1]) { //Yes: (case - subtraction)
        //console.log('in here');
        return oi % 2 !== 0 ? getSymBefore(oi) + getSymAfter(oi) //current obj is in seq5
            : obj.sym + getSymAfter(oi) //obj is in seq10
    } 
    else {
        //console.log('in there', oi, ni, n, obj.sym, n, obj.range[0]);
        let count;
        if (oi % 2 !== 0) {
            count = (n - obj.range[0]) / objarr[oi - 1].range[0]
            return obj.sym + getSymBefore(oi).repeat(count) //current obj is in seq5
        } 
        else {
            count = n / obj.range[0]
            return obj.sym.repeat(count);
        }
    }

});


    //Concatenate the symbols in the array
    return symarr.join('');

    function getSymBefore(index) {    	
        return objarr[index - 1].sym;
    }

    function getSymAfter(index) {
        return objarr[index + 1].sym;
    }


}

console.log(convertToRoman(1907));

//[1,5,10,50,100,500,1000] => ['I','V','X','L','C','D','M']
//Rules:
//Don't repeat a symbol more than 3 times in a row
//Smaller symbol before larger symbol indicates subtraction
//	"		"	 after 		"	"		"		addition

// 1 <= n <= 4 --> I,II,III,[IV]
// 5 <= n <= 9 --> V,VI,VII,VIII,[IX]
// 10 <= n <= 50 --> X,XI,XII,XIII,XIV,XV,XVI,XVII,XVIII,XIX,
//						  XX,XXI,XXII,XXIII,XXIV,XXV,XXVI,XXVII,XXVIII,XXIX,
//						  XXX,...,
//					(40)  [XL],XLI,XLII,XLIII
// 50 <= n < 100 --> L,LI,LI,LIII,...,
//						  LX,LXI,LXII, ...,
//						  LXX,...,
//						  LXXX,...,
//					(90)  [XC],...,XCIX
//...and so on
