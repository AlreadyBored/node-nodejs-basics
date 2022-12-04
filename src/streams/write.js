import { createWriteStream } from 'node:fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __fileToWrite = path.dirname(__filename) + '/files/fileToWrite.txt';

const write = async () => {
    const writeFile = createWriteStream(__fileToWrite);

    process.stdin.pipe(writeFile);
};

await write();