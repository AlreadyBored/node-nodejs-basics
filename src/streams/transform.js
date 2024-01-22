import { pipeline, Transform } from 'stream';
// import { pipeline } from 'stream/promises';

// const reversedStr = (str) => str.split('').reverse().join('');
// class myTransformedStream extends Transform {
// 	_transform(chunk, encoding, callback) {
// 		callback(null, reversedStr(chunk.toString()));
// 	}
// }

const reverse = new Transform({
	transform(chunk, _, callback) {
		const string = chunk.toString().trim();
		const reversedStr = string.split('').reverse().join('');
		callback(null, reversedStr + '\n');
	},
});

const cliInput = process.stdin;
const cliOutput = process.stdout;

const transform = async () => {
	pipeline(cliInput, reverse, cliOutput, (err) => console.error(err));

	// via class
	// const transformeStr = new myTransformedStream();
	// await pipeline(process.stdin, transformeStr, process.stdout);
	// more complicated variant
	// const reverseStream = new Transform({
	// 	async transform(chunk, encoding) {
	// 		const reversedText = chunk.toString().split('').reverse().join('');
	// 		this.push(reversedText); // directly push the reversed text to the stream
	// 	},
	// });
	// // Write the data from reverseStream to process.stdout
	// reverseStream.on('data', (data) => {
	// 	process.stdout.write(data);
	// });
	// // Handle error event on process.stdout
	// process.stdout.on('error', (err) => {
	// 	if (err.code === 'EPIPE') {
	// 		// Ignore EPIPE error
	// 		return;
	// 	}
	// 	// Handle other errors
	// 	console.error('Error writing to process.stdout:', err);
	// });
	// // Read the input text from command line argument
	// const inputText = process.argv[2];
	// // Write the input text to the reverse stream
	// reverseStream.write(inputText);
	// // End the reverse stream
	// reverseStream.end();
};

// I use the command in terminal to check the code: node --experimental-modules transform.js "To be or not to be"

await transform();
