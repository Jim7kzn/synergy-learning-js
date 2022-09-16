let symId = Symbol();

user = {
	name: 'XXX',
	age: 11,
	[symId]: 73,
}

console.log(user[symId]);

