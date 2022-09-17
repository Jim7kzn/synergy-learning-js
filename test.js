class NewClas {
	constructor(val1 = 'defaultValue1', val2= 'defaultValue2') {
		this.property1 = val1;
		this.property2 = val2;
	}

	method1() {console.log(`${this.property1} и ---`)}

	method2() {console.log(`--- и ${this.property2}`)}

	method3() {console.log(`${this.property1} и ${this.property2}`)}
}

let newObj1 = new NewClas();
console.log(newObj1);
newObj1.method1();
newObj1.method2();
newObj1.method3();

let newObj2 = new NewClas('Объект 2');
console.log(newObj2);
newObj2.method1();
newObj2.method2();
newObj2.method3();
