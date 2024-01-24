import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { join } from 'node:path';
const __dirname = import.meta.dirname;

const write = async () => {
    stdin.pipe(createWriteStream(join(__dirname, 'files/fileToWrite.txt')));
};

await write();
