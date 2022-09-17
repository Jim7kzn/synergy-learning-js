let car = {
	model: "Toyota",
	tankCapacity: 50,
	_petrolNow: 0,

	get petrolNow() {
		return this._petrolNow;
	},

	set petrolNow(nVal) {
		if ((nVal + this._petrolNow) > this.tankCapacity) {
			console.log('Слишком много бензина!');
		} else {
			this._petrolNow += nVal;
		}
	},
};

console.log(car.petrolNow);

console.log('--- добавляем 55л');
car.petrolNow = 55;
console.log(car.petrolNow);

console.log('--- добавляем 25л');
car.petrolNow = 25;
console.log(car.petrolNow);

console.log('--- добавляем 30л');
car.petrolNow = 30;
console.log(car.petrolNow);

console.log('--- добавляем 25л');
car.petrolNow = 25;
console.log(car.petrolNow);
