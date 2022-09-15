let i = 0;
let cStr = 'Hello, world!';

while (i < cStr.length) {
	if (i % 2 === 0) {
		console.log(cStr[i] + cStr[i + 1]);
	}
	i++;
}

console.log('--- демонстрация однократного выполнения do...while')
console.log('i = ' + i + ', cStr.length = ' + cStr.length + ', i < cStr.length = ' + (i < cStr.length));
 do {
	console.log('а вывод идёт!');
	console.log(cStr[i] + cStr[i + 1]);
	i++;
} while (i < cStr.length)

console.log('--------')
i = 0;
do {
	if (i % 2 === 1) {
		console.log(cStr[i] + cStr[i + 1]);
	}
	i++;
} while (i < cStr.length - 1)

console.log('--------')
for (i=0; i < cStr.length; i++) {
	if (i % 2 === 0) {
		console.log(cStr[i] + cStr[i + 1]);
	}
}