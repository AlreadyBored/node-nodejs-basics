import { createWriteStream } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const writeFile = currentDir + '/files/fileToWrite.txt';

const write = async () => {
    const stream = createWriteStream(writeFile);
    process.stdin.pipe(stream);
};

await write();