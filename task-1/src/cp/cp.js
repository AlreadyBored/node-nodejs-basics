import { fork } from "child_process";
import { URL } from "url";
import fs from 'fs';
import { dirname } from "path";


export const spawnChildProcess = async (args) => {
	try {
		const __filename = new URL('./files/script.js', import.meta.url).pathname;
		const __dirname = dirname(__filename);

		const isDirExists = fs.existsSync(__dirname);

		if (!isDirExists) {
			throw new Error('Error: no such directory');
		}

		const isFileExists = fs.existsSync(__filename);
	
		if (!isFileExists) {
			throw new Error('Error: no such file');
		}

		const childProcess = fork(__filename, args, { silent: true });

		childProcess.stdout.pipe(process.stdout);

		childProcess.stdout.on("data", (data) => {
			console.log(`Received from child process: ${data}`);
		});

		process.stdin.pipe(childProcess.stdin);

	} catch (error) {
		console.error(error);
	}

};

spawnChildProcess(['one', 'two', 'three']);