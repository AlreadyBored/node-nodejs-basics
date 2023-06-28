import { spawn } from 'child_process';
// import { fork } from 'child_process';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const childProcess = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
	const cp = spawn('node', [childProcess, ...args]);

	process.stdin.pipe(cp.stdin);
	cp.stdout.pipe(process.stdout);

	// or can use: fork(childProcess, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([22, 'a', 33, 'b', 44, 'c', 55, 'd']);
