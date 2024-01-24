import { Transform } from 'stream';

const transform = async () => {
	// Write your code here
	class ReverseTransformStream extends Transform {
		_transform(chunk, encoding, callback) {
			const input = chunk.toString();
			const reversed = input.split('').reverse().join('');

			this.push(reversed);
			callback();
		}
	}
	const reverseTransform = new ReverseTransformStream();
	process.stdin.pipe(reverseTransform);

	reverseTransform.pipe(process.stdout);
};

await transform();
