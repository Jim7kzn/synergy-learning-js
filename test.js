function changeVal() {
	cStr = 'Я люблю тебя, Жизнь!';
}

function myPow(a = 0, b = 1) {
	return a ** b;
}

function myFactorial(x= 1) {
	let result = 1;
	let i = 1;
	do {
		result *= i;
		i++
	} while (i <= x)
	return result;
}


let cStr = 'I love this game!';

console.log(cStr);
changeVal();
console.log(cStr);

console.log('-------');
console.log(myPow(7,3));
console.log(myPow(11,4));

console.log('-------');
console.log(myFactorial(2));
console.log(myFactorial(3));
console.log(myFactorial(6));
