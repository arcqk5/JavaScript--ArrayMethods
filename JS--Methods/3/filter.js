//filter
//js--methods

const arr = [-40, 54, -1, 18, 290],
      arrStr = ['Hi', 'go', 'Go', 'Hello'];

let new__arr = arr.filter(item => {
    if(item > 1) {//true
        return item;
    } 
});
console.log(new__arr); //[54, 18, 290]


let new__arr2 = arr.filter(item => {
    if(item > 1) {//true
        return item * 10000;
    } 
});
console.log(new__arr2); //[54, 18, 290]


let new__arr3 = arr.filter((item, index) => {
    if(item > 10) { 
        return index;//true
    } 
});
console.log(new__arr3); //[54, 18, 290]


let new__arr4 = arr.filter((item, index) => {
    if(item > 10) { 
        return 0;//false
    } 
});
console.log(new__arr4); //[]


let new__arr5 = arr.filter((item, index) => {
    if(item % 2 === 0) { 
        return true;
    } 
});
console.log(new__arr5);//[-40, 54, 18, 290]