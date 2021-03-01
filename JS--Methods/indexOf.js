// indexOf
//JavaScript--Methods

const arr = [1, 3, 6, 15, 25, -1, -10000, 15, 15],
      arrString = ['hi', 'Hi', 'Hello'];
      

//1
console.log(arr.indexOf(15)); // console.log - 3

//2
if (arr.indexOf(-1) !== -1) {
    console.log('yes, this number is in the array');
} else {
    console.log('no, this number is not in the array');
}

//3  arrString
//console.log(arrString.indexOf('Hi')); true(console.log - 1)
console.log(arrString.indexOf('ti')); //-1

//4
function MyIndexOfFunction(array, item, from = 0) {
    for (let i = from; i < array.length; i++) {
        if(array[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(MyIndexOfFunction(arr, 15)); // console.log - 3



