import { createReadStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const stream = createReadStream(filePath, { encoding: 'utf8' });

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('error', (error) => {
        throw new Error('FS operation failed');
    });

    stream.on('end', () => {
        console.log('\nFile read successfully!');
    });
};

await read();