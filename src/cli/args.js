const PREFIX = '--';

const parseArgs = () => {
	console.log(process.argv); // process.argv - command line arguments starting from 3rd element
	const argsParts = process.argv.slice(2).reduce((acc, value, index, array) => {
		if (value.startsWith(PREFIX)) {
			const formatedProps = `${value.replace(PREFIX, '')} is ${
				array[index + 1]
			}`;
			return [...acc, formatedProps];
		}
		return acc;
	}, []);

	const stringifiedArgs = argsParts.join(', ');

	console.log('The arguments are:\n', stringifiedArgs + '\n');
};

parseArgs();
