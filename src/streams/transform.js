import * as stream from "stream";

const transform = async () => {
	let reverseTransform = new stream.Transform({
		transform(chunk, encoding, callback) {
			callback(null, chunk
				.toString()
				.split('')
				.reverse()
				.join(''));
		}
	})

	process.stdin
		.pipe(reverseTransform)
		.pipe(process.stdout)
};

await transform();