import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
    const path = './src/streams/files/fileToRead.txt';
    const readStream = createReadStream(path);
    await pipeline(readStream, process.stdout);
};

await read();