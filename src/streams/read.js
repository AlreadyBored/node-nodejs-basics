import { createReadStream } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const readFile = currentDir + '/files/fileToRead.txt';

const read = async () => {
    const stream = createReadStream(readFile);
    stream.pipe(process.stdout);
};

await read();