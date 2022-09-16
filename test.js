let warehouse = {
	sportsNutrition: {
		proteins: 10,
		aminoAcids: 15,
		fatBurners: 5,
	},
	dumbbells: 20,
	balls: 20,
}

warehouse.vitamins = 30;

console.log(warehouse);

console.log(warehouse.balls);

warehouse.sportsNutrition.fatBurners = 0;
console.log(warehouse);
delete warehouse.sportsNutrition.fatBurners;
console.log(warehouse);

console.log('proteins' in warehouse.sportsNutrition);

let sum = 0;
for (key in warehouse) {
	if (typeof warehouse[key] === 'object') {
		let sumObj = 0;
		for (keyObj in warehouse[key]) {
			sumObj += warehouse[key][keyObj];
		}
		sum += sumObj;

	} else {
		sum += warehouse[key];
	}
}
console.log(warehouse);
console.log(sum);
