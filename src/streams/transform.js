import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';

const transform = async () => {
	const tr = new Transform({
		transform(chunk, enc, cb) {
			const chunkStr = chunk.toString().trim();
			const reversedChunk = chunkStr.split('').reverse().join('');
			cb(null, reversedChunk + '\n');
		}
	});
	pipeline(stdin, tr, stdout, err => { throw err });
};

await transform();
