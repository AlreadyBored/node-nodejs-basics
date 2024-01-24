import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join } from 'node:path';
const __dirname = import.meta.dirname;

const {
	createHash,
} = await import('node:crypto');

const calculateHash = async () => {
    const hash = createHash('sha256');
	const input = createReadStream(join(__dirname, 'files/fileToCalculateHashFor.txt'));
	input.pipe(hash).setEncoding('hex').pipe(stdout)
};

await calculateHash();
