import { createWriteStream } from 'node:fs';

const write = async (fileToWrite) => {
    const stdin = process.stdin.on('data', () => {});

    const writeStream = createWriteStream(fileToWrite);
    stdin.pipe(writeStream);
};

await write('./files/fileToWrite.txt');
