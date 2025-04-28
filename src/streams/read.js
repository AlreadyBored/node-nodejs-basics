import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { stdout } from 'node:process';

const read = async () => {
    const filePath = resolve('src/streams/files/fileToRead.txt');

    const readableStream = createReadStream(filePath, { encoding: 'utf-8' });

    readableStream.pipe(stdout);

    readableStream.on('error', (error) => {
        console.error('Error while reading the file:', error.message);
    });
};

await read();
