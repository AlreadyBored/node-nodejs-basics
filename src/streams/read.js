import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk + "\n"); 
    });
    readStream.on('error', (err) => {
        console.error('FS operation failed', err);
    });
};

await read();
