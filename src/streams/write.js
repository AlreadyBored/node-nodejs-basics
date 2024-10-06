import { createWriteStream } from 'fs';
import __dirname from './__dirname.js';
import { join } from 'path';

const filePath = join(__dirname, 'files', 'fileToWrite.txt');
const writeableStream = createWriteStream(filePath);

const write = async () => {
  process.stdin.on('data', data => {
    writeableStream.write(data);
  });
};

await write();
