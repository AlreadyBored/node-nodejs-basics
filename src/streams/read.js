import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join } from 'node:path';
const __dirname = import.meta.dirname;

const read = async () => {
	createReadStream(join(__dirname, './files/fileToRead.txt')).pipe(stdout);
};

await read();
