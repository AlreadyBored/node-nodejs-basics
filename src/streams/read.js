import { createReadStream } from 'node:fs';

const read = async (filePath) => {
    const readStream = createReadStream(filePath);
    readStream.pipe(process.stdout);
};

await read('./files/fileToRead.txt');
