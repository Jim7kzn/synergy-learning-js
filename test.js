// function ask(question, yes, no) {
// 	if (confirm(question)) yes()
// 	else no();
// }
//
// ask('Вы согласны?',
// 	() => {alert('Вы согласились!');},
// 	() => {alert('Вы отказались!');},
// 	);

let vehicleFleet = {
	title: "Автопарк",
	cars: ["Toyota", "Audi", "Mercedes", "Opel",],

	showList() {
		this.cars.forEach(
			(cars) => console.log(this.title + ': ' + cars)
		);
	}
};

vehicleFleet.showList();