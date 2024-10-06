import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const fileStream = createReadStream(file);

  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const hashHex = hash.digest('hex');
    console.log(hashHex);
  });
};

await calculateHash();
