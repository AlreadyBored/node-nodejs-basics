import __dirname from './__dirname.js';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'fs';

const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readableStream = createReadStream(filePath);
  const res = readableStream.pipe(createHash('sha256')).digest('hex');
  console.log(res);
};

await calculateHash();
