import { spawn } from 'child_process';

const spawnChildProcess = async args => {
	const child = spawn('node', ['./files/script.js', ...args]);

	process.stdin.on('data', data => {
		child.stdin.write(data);
	});

	child.stdout.on('data', data => {
		console.log(data.toString());
	});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--arg1', '--arg2']);
