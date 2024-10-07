import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
    writeStream.on('error', (err) => {
        console.error('FS operation failed', err);
    });
    writeStream.on('finish', () => {
        console.log('Writing to file finished successfully.');
    });
};

await write();
