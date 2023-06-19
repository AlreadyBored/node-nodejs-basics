import { createReadStream } from 'node:fs';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readable = createReadStream(filePath);

  readable.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  });
};

await read();
