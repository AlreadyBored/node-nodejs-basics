import { createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';

const dir = getDir(import.meta.url);
const pathToWrite = path.join(dir, './files/fileToWrite.txt' );
const write = async () => {
    const writeStream = createWriteStream(pathToWrite, 'utf-8');
    stdin.pipe(writeStream);
};

await write();