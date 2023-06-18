const parseArgs = () => {
	// Write your code here
	const res = process.argv.slice(2).reduce((prev, cur, i, arr) => {
		return cur.startsWith('--')
			? `${prev}${cur.substring(2)} is`
			: `${prev} ${cur}${i < arr.length - 1 ? ', ' : ''}`;
	}, '');

	console.log(res);
};

parseArgs();
