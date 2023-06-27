import { pipeline, Transform } from 'stream';

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
};

await transform();
