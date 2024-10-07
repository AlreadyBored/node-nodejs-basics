import { createReadStream } from 'fs';

const read = async () => {
    const readableStream = createReadStream('./files/fileToRead.txt');

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    });
};

await read();