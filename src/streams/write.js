import { createWriteStream } from 'node:fs';

const write = async () => {
    const writableStream = createWriteStream('src/streams/files/fileToWrite.txt');

    process.stdin.pipe(writableStream);
};

await write();
