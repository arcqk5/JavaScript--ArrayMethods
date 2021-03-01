// map 
// js--methods

const arr = [1, 2, 4, 10, 59, -100, 0.4],
      arrstring = ['hi', 'grigoriy', 'tutu'];

let new__arr = arr.map(item => {
    //console.log(item);
    return item;
}); 
console.log(new__arr); // new__arr === arr

let new__arr2 = arr.map(item => {
    //console.log(item);
    if(item >= 2){
        return item;
    }
}); 
console.log(new__arr2); // [undefined, 2, 4, 10, 59, undefined, undefined]

let new__arr3 = arr.map(item => {
    //console.log(item);
    return item*2;
});
console.log(new__arr3); // [2, 4, 8, 20, 118, -200, 0.8]



