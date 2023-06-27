const PREFIX = '--';

const parseArgs = () => {
	const argsParts = process.argv.reduce((acc, value, index, array) => {
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
