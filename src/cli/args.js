const isKey = (arg, index) => index % 2 === 0;

const parseArgs = () => {
	const args = process.argv.slice(2);
	const keys = args.filter(isKey);
	const values = args.filter((arg, index) => !isKey(arg, index));
	const output = keys
		.map((key, index) => `${ key } is ${ values[index] }`)
		.join(', ');
	console.log(output);
};

parseArgs();
