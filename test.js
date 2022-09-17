// var promise = new Promise(function(resolve, reject) {
// 	// Эта функция будет вызвана автоматически
//
// 	// В ней можно делать любые асинхронные операции,
// 	// А когда они завершатся — нужно вызвать одно из:
// 	// resolve(результат) при успешном выполнении
// 	// reject(ошибка) при ошибке
// })

let promise = new Promise(function(resolve, reject) {
	resolve(1);

	setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
