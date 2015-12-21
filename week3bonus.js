function squared ( x ) {

	return x*x;
}


function foo ( x ) {
	return 3*x + 1;
}


function bar ( x ) {
	return 7*x - 5;
}

console.log( squared( foo (bar ( 5 ) ) ) );