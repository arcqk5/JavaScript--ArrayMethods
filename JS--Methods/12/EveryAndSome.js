//Every and Some
//js--methods

//every
const arr = [4, 5, 6];
let b = arr.every(item => {
    if (item > 3) return true;
});

console.log(b); //true

let c = arr.every(item => {
    if (item > 4) return true;
});

console.log(c); //false


//some (если хотя бы один эл-т подошел под условие => true)
const arr2 = [4, 5, 6];
let b2 = arr2.some(item => {
    if (item > 3) return true;
});

console.log(b2); //true
