console.log("Before the non blocking operation");

setTimeout(() => {
	console.log('Non blocking operation completed');
}, 2000);
console.log('After non-blocking operation');