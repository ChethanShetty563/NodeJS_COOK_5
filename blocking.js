function blockingOperation() {
	console.log("Starting the blocking operation");
	//Simulating the blocking
	for(let i = 0; i< 1000000000;i++) {
		// This loop keeps cpu busy
	}
	console.log('End of blocking opearion');
}
console.log('Before blocking the opearion');

blockingOperation();
console.log('After blocking the opearion');