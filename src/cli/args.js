const parseArgs = () => {
	const outputArray = [];
	for (let i = 2; i < process.argv.length;) {
		outputArray.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
		i += 2;
	};

	console.log(outputArray.join(', '));
};

parseArgs();