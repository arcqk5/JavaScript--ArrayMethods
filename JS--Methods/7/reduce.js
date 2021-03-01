// reduce
//js--methods

//reduce - используется для "свёртки массивов"
//возвращает результат обработки массива

let arr = [22, 33, 55];

let new_arr = arr.reduce((accum, item) => {
    console.log(accum);
    return accum;
});

//new_arr = 22

let new_arr2 = arr.reduce((accum, item) => {
    accum += item;
    return accum;
});
console.log(new_arr2); //22+33+55=110


let new_arr3 = arr.reduce((accum, item) => {
    accum = accum + ' ' +item;
    return accum;
});
console.log(new_arr3); //22 33 55


let arr2 = [-22, 33, 55];
let new_arr4 = arr2.reduce((accum, item) => {
    if (item > 0) {
        accum += item;
    }
    return accum;
});
console.log(new_arr4); // не 88 а 88-22=66 т.к accuum изначально берет в себя первое число в массиве,
// чтобы такого не было, нужно сделать так:
let new_arr5 = arr2.reduce((accum, item) => {
    if (item > 0) {
        accum += item;
    }
    return accum;
}, 0);
console.log(new_arr5); // 88

//Вывод наибольшего числа: ~~if item > accum => accum = item~~


//2
let array = [
    {"id" : 10, "name" : "Ivan"},
    {"id" : 11, "name" : "Grisha"},
    {"id" : 13, "name" : "Olga"},
    {"id" : 26, "name" : "Danil"},
];

let new_array = array.reduce((accum, item) => {
    accum.push(item.id);
    return accum;
}, []);
console.log(new_array); // [10, 11, 13, 26]
