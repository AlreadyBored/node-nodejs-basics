import { createReadStream } from 'node:fs';

const read = async () => {
    const readableStream = createReadStream(
        './src/streams/files/fileToRead.txt',
        { encoding: 'utf-8' }
    );
    readableStream.on('data', (text) => {
        process.stdout.write(text + '\n');
    });
};

await read();
