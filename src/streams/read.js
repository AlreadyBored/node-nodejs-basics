import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));

    readStream.on('error', () => {
        throw new Error('FS operation failed: file does not exist or cannot be read');
    });

    readStream.pipe(process.stdout);
};

await read();