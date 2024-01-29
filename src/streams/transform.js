const transform = async () => {
	try {
		const {
			Transform
		} = await import('stream');

		// Create a transform stream
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

/* transform.js - implement function that reads data from process.stdin,
 * reverses text using Transform Stream and then writes it into
 * process.stdout */
