import { argv } from 'node:process';

const parseArgs = () => {
	const [, , ...args] = argv;
    let argumentsString = '';
	args.forEach((arg, index) => {
		if (arg.startsWith('--')) {
			argumentsString += `${arg.replace('--', '')} is `;
		} else {
			argumentsString += `${arg}${index === args.length - 1 ? '' : ', '}`;
		}
	});
	console.log(argumentsString);
};

parseArgs();
