//console.log('What is your name?');
//process.stdin.on('data', (data) => {
	// Processing on each data event
//	const name = data.toString().trim().toUpperCase();
	
//	if(name !== '') {
//		 process.stdout.write(`Hello ${name}!`);
//	}
//	else {
//		process.stderr.write('Input was Empty!\n');
//	}
//});

// Promise Variant

const readline = require('node:readline/promises');
async function greet() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
		});
	const name = await rl.question('What is your name?\n');
	console.log(`Hello ${name}!`);
	rl.close();
}
greet();
	
