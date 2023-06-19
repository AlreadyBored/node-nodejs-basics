const parseArgs = () => {
const flags = process.argv.slice(2);
	let result = '';
	for (let i = 0; i < flags.length; i = i + 2) {
		result += `${flags[i].slice(2)} is ${flags[i + 1]}${(flags.length > 2) && (i < flags.length - 2) ? ', ' : ''}`;
	}
	console.log(result);
};

parseArgs();
