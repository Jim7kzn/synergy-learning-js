let car = {
	type: 'Toyota',
	model: 'Raum',
	netto: 700,
	maxSpeed: 170,
	aboutCar: function () {
		return 'Это автомобиль марки ' + this.type + ' модель ' + this.model;
	},
};

console.log('-------\n', car);
let strJson = JSON.stringify(car);
console.log(strJson, '\n-------');

let objJson = JSON.parse(strJson);
console.log(objJson, '\n-------');

let arrExample = {
	object: {param1: 'val1', param2: 'val2'},
	array: ['Один', 2, 'Три', 4],
	string: 'Строка',
	number: 73,
	bool: true,
	null: null,
};

strJson = JSON.stringify(arrExample);
console.log(strJson);