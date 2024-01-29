const parseArgs = () => {
    for(let id = 2; id < process.argv.length; id++) {
		console.log(`${process.argv[id].slice(2)} is ${process.argv[++id]}`);
	}
};

parseArgs();