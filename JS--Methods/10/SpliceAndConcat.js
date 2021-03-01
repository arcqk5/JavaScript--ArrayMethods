// Splice and Concat
// js--methods

//splice
let array = [11, 12, 14, 19];
array.splice(2, 2); // Откуда и сколько удалять
// [11, 12]


//concat
const arr_1 = [11, 12, 14, 19];
const arr_2 = [18, 12, 15, 19];

const conc = arr_1.concat(arr_2);
console.log(conc); //[11, 12, 14, 19, 18, 12, 15, 19]