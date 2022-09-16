// let car = {
// 	type: 'Toyota',
// 	model: 'Raum',
// 	netto: 700,
// 	maxSpeed: 170,
// 	aboutCar: function () {
// 		return 'Это автомобиль';
// 	},
// };

// let car = {
// 	type: 'Toyota',
// 	model: 'Raum',
// 	netto: 700,
// 	maxSpeed: 170,
// 	aboutCar: function () {
// 		return 'Это автомобиль марки ' + this.type + ' модель ' + this.model;
// 	}
// }

function Cars(type = 'Toyota',
			  model = 'Raum',
			  netto = 700,
			  maxSpeed = 170) {
	this.type = type;
	this.model = model;
	this.netto = netto;
	this.maxSpeed = maxSpeed;
	this.aboutCar = function () {
		return 'Это автомобиль \"' + this.type + '\" модели \"' + this.model +
			'\".\nВес - ' + this.netto + 'кг, максимальная скорость - ' + this.maxSpeed + ' км/ч.\n';
	}
}

let newCar1 = new Cars();
let newCar2 = new Cars('Audi', 'Q7', 1000, 220);

console.log(newCar1.aboutCar());
console.log(newCar2.aboutCar());
