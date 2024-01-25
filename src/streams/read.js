import { createReadStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const dir = path.dirname(fileURLToPath(import.meta.url));
const pathToRead = path.join(dir, './files/fileToRead.txt' );
const readStream = createReadStream(pathToRead, 'utf-8');

const read = async () => {
    readStream.pipe(stdout);
};

await read();