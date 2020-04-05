//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {

    if (arr.some(x => Array.isArray(x)) === false) { return arr; } //No nested elements

    let newarr = [];

    //IIFE
    (function flatarr(zarr) {
        
        //Check if zarr is already a number, string, or object and collect it
        if (typeof(zarr) === 'number' || typeof(zarr) === 'string' || !zarr.length) {
            newarr.push(zarr);
        }

        //Iterate through zarr and flatten each element recuresively
        else {
            zarr.filter(elem => elem.length != 0 )
                .forEach((elem) => {

                    //Is elem a nested number or another array?
                    let test = elem;
                    Array.isArray(test) && test.length == 1 ? flatarr(test[0]) : test = flatarr(test);
                });
        }
    })(arr);

    return newarr;
}

let result = steamrollArray([1, ['a'], [3, [[4]]], [{}]]);
console.log(result);
