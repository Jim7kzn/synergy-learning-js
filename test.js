function expIteration(nVal = 1, nDegree = 0) {
	if (nVal === 0 && nDegree === 0) return null;
	if (nDegree === 0) return 1;
	let res = 1;

	do {
		res *= nVal;
		nDegree--;
	} while (nDegree > 0)
	return res;
}

function expRecursion(nVal = 1, nDegree = 0) {
	if (nVal === 0 && nDegree === 0) return null;
	if (nDegree === 0) return 1;
	return nVal * (nDegree === 2 ? nVal : expRecursion(nVal, nDegree - 1));
}

function getFibonachi(nHow = 2) {
	if (nHow < 0) return false;
	switch (nHow) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return getFibonachi(nHow - 1) + getFibonachi(nHow - 2);
	}
}

function rowFibonachi(howElements = 2) {
	if (howElements < 2) howElements = 2;
	let resArray = [0, 1];
	for (let i = 3; i <= howElements; i++) resArray[i - 1] = getFibonachi(i);
	return resArray;
}

console.log(expIteration(3, 7));
console.log(expRecursion(3, 7));

rowF = rowFibonachi(15);
console.log(rowF)