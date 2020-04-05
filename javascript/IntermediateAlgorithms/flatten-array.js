function steamrollArray(arr) {

    if (arr.some(x => Array.isArray(x)) === false) { return arr; } //No nested elements

    let newarr = [];

    //IIFE
    (function flatarr(zarr) {

        //Check if zarr is already a number or object
        if (typeof(zarr) === 'number' || !zarr.length) {
            newarr.push(zarr);

        } 

        //zarr is of type Array
        else { 
            zarr.forEach((elem, index, tarr) => {
                let test = elem;
                //console.log('NEW LOOP');
                //console.log("test before = ", test);

                //elem is a nested number
                if (Array.isArray(test) && test.length == 1) { 
                    //console.log('calling flatarr() on ', test[0]);
                    flatarr(test[0]);

                } 
                //elem is a multi-element array of unknown contents. flatten each element.
                else { 
                    test = flatarr(test);
                }

            });
        }
    })(arr);

    return newarr;
}

//steamrollArray([1, [2],[3, [[4]]]]);
let result = steamrollArray([
    [
        [
            [1]
        ]
    ],
    [
        [2],
        [
            [3]
        ], 1
    ], 4, {}
]);
console.log(result);




// //Check if arr is actually a number or object
// if (typeof(arr) === 'number' || !arr.length) {
//     newarr.push(arr);

// } else { //arr is of type Array

//     //if (arr.some(x => isarr(x)) === false) { return arr; } //No nested elements

//     arr.forEach(elem => {
//         let test = elem;
//         console.log('NEW LOOP');
//         console.log("test before = ", test);

//         if (isarr(test) && test.length == 1) { //Nested number
//             console.log('calling steamrollArray() on ', test);
//             steamrollArray(test[0]);

//         } else { //multi-element array of unknown contents. check flatten each element
//             steamrollArray(test);
//         }

//     });
// }