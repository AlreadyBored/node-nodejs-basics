import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
    const path = './src/streams/files/fileToWrite.txt';
    const writeStream = createWriteStream(path);
    await pipeline(process.stdin, writeStream);
};

await write();