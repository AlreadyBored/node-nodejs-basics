import { createReadStream } from 'node:fs';
import path from 'path';
import { stdout } from 'node:process';
import { getDir } from '../utils';

const dir = getDir(import.meta.url);
const pathToRead = path.join(dir, './files/fileToRead.txt' );
const readStream = createReadStream(pathToRead, 'utf-8');

const read = async () => {
    readStream.pipe(stdout);
};

await read();