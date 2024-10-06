import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
import { getPath } from '../fs/fs-constants.js';


const filePath = getPath(import.meta.url, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const fileStream = createReadStream(filePath);

  // const fileContent = await readFile(filePath, { encoding: 'utf8' });
  // const hash = createHash('sha256').update(fileContent).digest('hex');
  //
  // console.log(`Hash: ${ hash }`);

  fileStream.pipe(hash);

  hash.on('readable', () => {
    const data = hash.read();

    if (data) {
      console.log(`Hash: ${ data.toString('hex') }`);
    }
  });
};

await calculateHash();