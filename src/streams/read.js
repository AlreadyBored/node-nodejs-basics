import { createReadStream } from 'fs';
import __dirname from './__dirname.js';
import { join } from 'path';

const filePath = join(__dirname, 'files', 'fileToRead.txt');
const readableStream = createReadStream(filePath);

const read = async () => {
  readableStream.on('data', chunk => {
    process.stdout.write(chunk + '\n');
  });
};

await read();
