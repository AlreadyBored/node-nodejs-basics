import { createWriteStream } from 'fs'
import path from 'node:path';
import { fileURLToPath } from 'url';

const write = async () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'fileToWrite.txt')
    process.stdin.pipe(createWriteStream(file));
    process.stdin.resume();
};

await write();
