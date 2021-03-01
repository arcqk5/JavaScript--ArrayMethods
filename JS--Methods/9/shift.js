//shift, unshift, slice
//js--methods

let arr = [11, 23, 42, 2389];

//shift
let st = arr.shift();
console.log(st); //11 // arr = [23, 42, 2389]

//unshift
let unst = arr.unshift(100);
console.log(unst); // 4 - length // arr = [100, 23, 42, 2389]

//slice
let new_arr = arr.slice(2);
console.log(arr); // arr = [100, 23, 42, 2389]
console.log(new_arr); // new_arr = [42, 2389]

//slice
let arr2 = [11, 12, 13, 14, 15, 16]
let new_arr2 = arr2.slice(2, 4); // от и до
console.log(arr2); // arr2 = [11, 12, 13, 14, 15, 16]
console.log(new_arr2); // new_arr2 = [13, 14]