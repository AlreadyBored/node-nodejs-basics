import readline from 'readline';
import * as nwd from './modules/nwd.mjs';
import * as customOs from './modules/os.mjs';
import * as customFs from './modules/customFs.mjs';
import * as hash from './modules/hash.mjs'
import * as compress from './modules/compress.mjs'
import * as errors from './modules/errors.mjs'
import os from 'os';

let userName = 'noname';
const invalidInput = 'Invalid input';
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

	const nwdCommands = ['up', 'cd', 'ls'];
	const fileCommands = ['cat', 'add', 'rn', 'cp', 'mv', 'rm'];
	const compressCommands = ['compress', 'decompress'];
	rl.on('line', async (input) => {
		try {
			input = input.trim();
			if (!input) {
				console.log(errors.invalidInput);
				printCurrentDirectory();
				return;
			}

			if (input === '.exit') {
				rl.close();
				return;
			}

			let inputArgs = input.split(' ');
			let command = inputArgs[0];
			if (nwdCommands.includes(inputArgs[0])) {
				command = 'nwd';
			} else if (fileCommands.includes(inputArgs[0])) {
				command = 'file';
			} else if (compressCommands.includes(inputArgs[0])) {
				command = 'compress';
			}

			switch (command) {
				case 'nwd':
					nwd.handleNWDCommand(inputArgs);
					break;
				case 'os':
					customOs.handleOSCommand(inputArgs);
					break;
				case 'file':
					customFs.handleFileCommand(inputArgs);
					break;
				case 'hash':
					hash.calculateHash(inputArgs);
					break;
				case 'compress':
					compress.handleCompressCommand(inputArgs);
					break;
				default:
					console.log(errors.invalidInput);
			}

			printCurrentDirectory();
		} catch(error) {
			console.log(errors.operationFailed);
			printCurrentDirectory();
		}
	}); 

	rl.on('close', () => {
		console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
	});
};

await start();