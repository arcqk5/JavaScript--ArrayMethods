// Find, FindIndex and lastIndexOf
// js--methods

const a = [1, 3, 5, 7, 8, 6];

//find
let b = a.find(item => {
    // if(item === 3) {
    //     return true;
    // }
    if (item >= 2 && item <= 4) return true;
});

console.log(b); // 3