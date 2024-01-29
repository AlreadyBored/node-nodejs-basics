import { Transform } from 'stream';
import { stdin, stdout } from 'process';


const transform = async () => {
	try {
		const readable = stdin;
		const writable = stdout;

		const transform = new Transform({
			transform(chunk, enc, callback) {
				const chunkStringified = chunk.toString().trim();
				const chunkReversed = chunkStringified.split('').reverse().join('');

				callback(null, chunkReversed + '\n');
			}
		})

		stdin.pipe(transform).pipe(stdout);
	} catch (error) {
		console.error(error.message)
	}
};

await transform();