import { createReadStream } from 'node:fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __fileToRead = path.dirname(__filename) + '/files/fileToRead.txt';

const read = async () => {
    const readFile = createReadStream(__fileToRead);

    readFile.pipe(process.stdout);
};

await read();