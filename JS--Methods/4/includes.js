//includes
//js--methods

const arr = [23, 67, 283, 9012, 129813, 56, -2739, -49493, -89.7];

//1
if (arr.includes(67)) {
    console.log("yes, this number is in the array"); //!
} else {
    console.log("no, this number is not in the array");
}

if (arr.includes(-67)) {
    console.log("yes, this number is in the array");
} else {
    console.log("no, this number is not in the array"); //!
}

//includes return true/false!


//2
const arr2 = [
    {"name" : "grigoriy", "tel" : 89209997711},
    {"name" : "artyomiy", "tel" : 89967895645},
    {"name" : "ilya", "tel" : 89919001967},
]

let filterUsers = arr2.filter(item => {
    if(item.name.includes('iy')) {
        return true;
    }
});
console.log(filterUsers);