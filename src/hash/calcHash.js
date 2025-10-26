import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const stream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
  
  stream.on('data', (data) => {
    hash.update(data);
  });
  
  stream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
