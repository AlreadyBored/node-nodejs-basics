import { createReadStream } from 'fs';
import { resolve } from 'path';

const read = async () => {
    const filePath = resolve('files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (error) => {
        console.error('Error reading file:', error.message);
    });
};

await read();
