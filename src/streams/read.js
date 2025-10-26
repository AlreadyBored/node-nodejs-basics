import fs from 'node:fs';
import path from 'node:path';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  const stream = fs.createReadStream(filePath);

  stream.on('error', (err) => {
    console.error('Error reading file:', err.message);
  });

  stream.pipe(process.stdout);
  stream.on('end', () => process.stdout.write('\n'));
};

await read();
