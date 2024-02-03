import readline from 'readline';
import os from 'os';

let userName = 'noname';
const printCurrentDirectory = () => {
	console.log(`You are currently in ${process.cwd()}`);
};

const start = async () => {
	process.chdir(os.homedir());
	const args = process.argv.slice(2);
	if (args.length && args[0].startsWith('--username=')) {
		userName = args[0].slice(args[0].indexOf('=') + 1);
	}

	console.log(`Welcome to the File Manager, ${userName}! ${os.EOL}`);
	printCurrentDirectory();
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

	rl.on('line', (input) => {
		if (input === '.exit') {
			rl.close();
			return;
		}

		switch(input) {
			case 'up':
				process.chdir('..');
		}

		printCurrentDirectory();
	}); 

	rl.on('close', () => {
		console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
	});
};

await start();