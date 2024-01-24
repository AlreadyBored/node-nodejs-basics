import { EOL } from 'node:os';
import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
	stdin.pipe(new Transform({
		transform: (chunk, encoding, callback) => {
			callback(null, String(chunk).split('').reverse().join('') + EOL + EOL);
		}
	})).pipe(stdout)
};

await transform();
