//Push and Pop
//js--methods

let arr = [3464, 838];

//PUSH
arr.push(10);
console.log(arr);

for (let i = 0; i < 5; i++) {
    arr.push(i*3)    
}
console.log(arr);// [3464, 838, 10, 0, 3, 6, 9, 12]

arr.push(12, -1, 14);
console.log(arr); // [3464, 838, 10, 0, 3, 6, 9, 12, 12, -1, 14]

console.log(arr.length); //11
console.log(arr.push(101010)); //12


//POP
for (let i = 0; i < 3; i++) {
    arr.pop();
}
console.log(arr); // [3464, 838, 10, 0, 3, 6, 9, 12, 12]


console.log(arr.length) // 9 
console.log(arr.pop()); //pop delete "12"

