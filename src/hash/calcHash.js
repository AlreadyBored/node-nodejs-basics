import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  // console.log('hash = ', hash);
  const readStream = createReadStream(pathToFile);

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log('SHA256 Hash:', hexHash);
  });
};

await calculateHash();