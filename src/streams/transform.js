import { Transform } from 'stream';

const transform = async () => {
	const reverseTransformPipe = new Transform({
		transform(chunk, encoding, callback) {
			const transformedData = chunk.toString()
				?.split('')
				.reverse()
				.join('');

			callback(null, transformedData);
		}
	});

	process.stdin
		.pipe(reverseTransformPipe)
		.pipe(process.stdout);
};

await transform();
