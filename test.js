function first(){
	// Как будто бы запрос к API
	setTimeout( function(){
		console.log(1);
	}, 500 );
}
function second(){
	console.log(2);
}

first();
second();