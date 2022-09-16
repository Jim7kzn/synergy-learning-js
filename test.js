let myMap = new Map();
let jim7 = { name: "Jim7" };

myMap.set("1", "str");			// строка в качестве ключа
myMap.set(1, "num");			// цифра как ключ
myMap.set(true, "bool");		// булево значение как ключ
myMap.set(jim7, 73);			// объект как ключ

// console.log(myMap.get(1));
// console.log(myMap.get("1"));
// console.log(myMap.get(jim7));
//
// console.log(myMap);
// console.log(myMap.size);		// 4

let mySet = new Set();
let name1 = {name: 'JimB', age: 40}
let name2 = {name: 'Anna', age: 23}
let name3 = {name: 'Helga', age: 30}
let name4 = {name: 'JimB', age: 44}

mySet.add(23);
mySet.add(1);
mySet.add('23');
mySet.add('23232323');
mySet.add(name1);
mySet.add(name2);
mySet.add(name3);
mySet.add(name4);
mySet.add(name3);

console.log(mySet);

