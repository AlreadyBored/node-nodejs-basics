import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const path = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const readStream = createReadStream(path);
        readStream.on('data', (chunk) => process.stdout.write(chunk.toString()));
    } catch (err) {
        throw err;
    }
};

await read();
