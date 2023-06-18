import stream from 'stream';

const transform = async () => {
	// Write your code here
	const reverseStream = new stream.Transform({
		transform(data, encoding, callback) {
			const reversedData = data.toString().split('').reverse().join('');
			this.push(reversedData + '\n');
			callback();
		},
	});

	process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
