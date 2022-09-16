// // массивы создаются либо операцией присвоения
// let array1 = [];
//
// // либо при помощи конструктора
// let array2 = new Array();

let myArray = ['111', '222', '333', '444', ];

console.log(myArray);

//добавление элемента в конец массива
myArray.push('Новый элемент');
console.log(myArray);

//добавление элемента в начало массива
myArray.unshift('Совсем новый элемент');
console.log(myArray);

//удаляет последний элемент массива
myArray.pop();
console.log(myArray);

//удаляет первый элемент массива
myArray.shift();
console.log(myArray);
