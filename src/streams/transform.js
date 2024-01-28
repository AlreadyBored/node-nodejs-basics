import { stdout, stdin } from 'process';
import { Transform } from 'stream';
const transform = async () => {
	const reverseInput = new Transform({
		transform(chunk, encoding, callback) {
			this.push(chunk.reverse());
			callback();
		}
	});
	stdin.pipe(reverseInput).pipe(stdout);
};

await transform();