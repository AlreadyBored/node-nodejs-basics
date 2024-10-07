import { createHash } from 'crypto';
import fs from 'fs';

const __dirname = import.meta.dirname;

const calculateHash = async () => {
  const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
  const hash = createHash('sha256');

  const readStream = fs.createReadStream(filePath, 'utf-8');
  readStream.on('data', (chunk) => {
    console.log(hash.update(chunk).digest('hex'));
  });
}

await calculateHash();
