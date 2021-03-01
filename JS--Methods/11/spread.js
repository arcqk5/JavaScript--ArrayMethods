//spread
//js--methods

//merge
const a = [1, 2];
const b = [3, 5, 1];
const c = [...a, ...b];
console.log(c); // [1, 2, 3, 5, 1]

//clone
const arr = [...a];
console.log(arr); //[1, 2]

//str->arr
const str = [..."hello"];
console.log(str); //["h", "e", "l" ,"l" ,"o"]

//set->arr
const s = [...new Set([1, 1, 3, 2, 1, 2, 5, 10])];
console.log(s); //[1, 2, 3, 5, 10]

//function
function test() {
    console.log([...arguments]);
}
test(3, 4, 5, 6)