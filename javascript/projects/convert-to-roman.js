function convertToRoman(num) {

    //Input validation
    if (num < 1 || num >= 4000) {
        console.log("Sorry. This program can only handle numbers between 1-3999");
        return undefined;
    }

    //Break num up into thousands, hundreds, tens, and ones
    let arr = Array.from(num.toString()), y = arr.length - 1;
    arr = arr.map( (x,j) => parseInt(x) * Math.pow(10,y-j) )
    		 .filter( x => x > 0);		//Skip digits == 0

    //Determine the roman numeral representation for each element in arr
    let objarr = [
        { sym: 'I', range: [1, 4] }, 		// 4 = IV
        { sym: 'V', range: [5, 9] }, 		// 9 = IX
        { sym: 'X', range: [10, 40] }, 		// 40 = XL
        { sym: 'L', range: [50, 90] }, 		// 90 = XC
        { sym: 'C', range: [100, 400] }, 	// 400 = CD
        { sym: 'D', range: [500, 900] }, 	// 900 = CM
        { sym: 'M', range: [1000, 3999] }
    ];

    //Notice the geometric sequences in the ranges above
    //I'll call them: 	seq10 = {1,10,100,1000,...} --> 0 and even indices
    //					seq5  = {5,50,500,...} --> odd indices
    //We need this information later to determine the order in which 
    //roman numerals will be generated

    //Comment: A more mathematical approach to identifying which sequence the
    //range falls into is the following test: Number.isInteger(log_10(range[0]))
    //If true then the object is of type "seq10"


    //Convert array to roman numeral symbols
    let symarr = arr.map((n, ni) => {

        //Find the object with the range that n falls into
        let oi = objarr.findIndex(obj => n >= obj.range[0] && n <= obj.range[1]);
        let obj = objarr[oi];

        //Is n at the end of the range?
        if (n === obj.range[1]) {			//Current obj is of type "seq5"
            return oi % 2 !== 0 ? getSymBefore(oi) + getSymAfter(oi) 
                :
                obj.sym + getSymAfter(oi) 	//type "seq10"
        }
        //Otherwise continue
        else {
            let count;
            if (oi % 2 !== 0) { 			//seq5
                count = (n - obj.range[0]) / objarr[oi - 1].range[0]
                return obj.sym + getSymBefore(oi).repeat(count)
            } else { 						//seq10
                count = n / obj.range[0]
                return obj.sym.repeat(count);
            }
        }

    });	//end symarr mapping

    //Finally concatenate and return the symbols in the array
    return symarr.join('');

    //********************
    //FUNCTION DEFINITIONS
    //********************

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
