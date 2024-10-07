import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const fileNameForRead = './files/fileToRead.txt';
const pathToFile = new URL(fileNameForRead, import.meta.url);

const read = async () => {
   const stream = createReadStream(pathToFile, { encoding: 'utf8'});
   await pipeline (stream, process.stdout);
};

await read();