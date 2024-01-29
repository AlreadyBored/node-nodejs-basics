const transform = async () => {
	try {
		const {
			Transform
		} = await import('stream');

		const reverseTransform = new Transform({
			transform(chunk, encoding, callback) {
				const reversedChunk = chunk.toString().split('').reverse().join('');
				callback(null, reversedChunk);
			}
		});

		process.stdin.pipe(reverseTransform).pipe(process.stdout);

		console.log("Transformation complete.");
	} catch (error) {
		console.error('Error: ', error.message);
	}
};

await transform();
