import { createReadStream } from 'node:fs';
import { resolve } from 'path';
import { stdout } from 'node:process';

const read = async () => {

    const absolutePath = await resolve('files', 'fileToRead.txt');
    const readableStream = createReadStream(absolutePath);

    readableStream.on('error', (error) => {
        stdout.write(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        stdout.write(chunk);
    })
};

await read();