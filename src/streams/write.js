import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const fileNameForRead = './files/fileToWrite.txt';
const pathToFile = new URL(fileNameForRead, import.meta.url);

const write = async () => {
    const stream = createWriteStream(pathToFile, {flags: 'a'});
    await pipeline (process.stdin, stream);
};

await write();