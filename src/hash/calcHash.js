import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pathToFileURL } from 'url';

const calculateHash = async () => {

  const path = pathToFileURL('src/hash/files/fileToCalculateHashFor.txt');
  const readStream = createReadStream(path);
  const hash = createHash('sha256');

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`SHA256 Hash of the file: ${fileHash}`);
  });

  readStream.on('error', (error) => {
    console.error(`Error reading the file: ${error.message}`);
  });
};

await calculateHash();
