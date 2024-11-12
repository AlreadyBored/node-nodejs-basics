import { spawn } from 'node:child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
	const filePath = join(import.meta.dirname, 'files', 'script.js');

	const childProcess = spawn('node', [filePath, ...args], {
	});

	process.stdin.pipe(childProcess.stdin);

	childProcess.stdout.pipe(process.stdout);
	childProcess.on('error', (err) => {
		console.error('[ERROR]:', err);
	});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['args1', 'args2', 'args3']);
