import { createHash} from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { __dirname } from '../utils.js';

const calculateHash = async () => {
  const file = join(__dirname, 'hash', 'files', 'fileToCalculateHashFor.txt');
  const sha256Hasher = createHash('sha256');

  const readStream = createReadStream(file, 'utf-8');

 return new Promise((resolvePromise, reject) => {
    readStream.on('data', chunk => sha256Hasher.update(chunk));
    readStream.on('end', () => {
      const digest = sha256Hasher.digest('hex');
      console.log(digest);
      resolvePromise(digest);
    });
    readStream.on('error', reject);
  });
}

await calculateHash();
