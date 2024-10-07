import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFilePath = '/files/fileToRead.txt';

const read = async () => {
    try {
        const readStream = createReadStream(path.join(__dirname, readFilePath));

        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await read();