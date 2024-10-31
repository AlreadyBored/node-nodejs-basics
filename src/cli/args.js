import { argv } from 'node:process';

const parseArgs = () => {
	for (let i = 2; i < argv.length; i += 2) {
		console.log(`${argv[i].replace('--', '')} is ${argv[i + 1]}`);
	}
};

parseArgs();
