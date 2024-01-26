import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileDir = path.join(__dirname, 'files/script.js');
const spawnChildProcess = async (args) => {
	const child = spawn('node', [fileDir, ...args]);

	process.stdin.pipe(child.stdin);
	child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['arg1', 'arg2']);
