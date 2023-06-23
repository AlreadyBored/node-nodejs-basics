import { Transform } from 'stream';

const transform = async () => {
	const reverseStream = new Transform({
		async transform(chunk, encoding) {
			const reversedText = chunk.toString().split('').reverse().join('');
			this.push(reversedText); // directly push the reversed text to the stream
		},
	});

	// Write the data from reverseStream to process.stdout
	reverseStream.on('data', (data) => {
		process.stdout.write(data);
	});

	// Handle error event on process.stdout
	process.stdout.on('error', (err) => {
		if (err.code === 'EPIPE') {
			// Ignore EPIPE error
			return;
		}
		// Handle other errors
		console.error('Error writing to process.stdout:', err);
	});

	// Read the input text from command line argument
	const inputText = process.argv[2];

	// Write the input text to the reverse stream
	reverseStream.write(inputText);

	// End the reverse stream
	reverseStream.end();
};

// I use the command in terminal to check the code: node --experimental-modules transform.js "To be or not to be"

await transform();
