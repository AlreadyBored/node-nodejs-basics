import { createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const stream = createWriteStream(filePath, { encoding: 'utf8' });

    process.stdin.pipe(stream);

    stream.on('error', (error) => {
        throw new Error('FS operation failed');
    });

    stream.on('finish', () => {
        console.log('File written successfully!');
    });
};

await write();