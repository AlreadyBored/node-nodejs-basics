import { createWriteStream } from 'node:fs';

const write = async () => {
    const writeableStream = createWriteStream(
        './src/streams/files/fileToWrite.txt',
        { encoding: 'utf-8' }
    );
    process.stdin.on('data', (data) => {
        writeableStream.write(data);
    });
};

await write();
