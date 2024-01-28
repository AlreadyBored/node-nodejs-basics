
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileForHash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

const hash = createHash('sha256');

  const calculateHash = async () => {
    const stream = createReadStream(fileForHash);
    stream.on('readable', () => {
      const data = stream.read();
      if (data)
        hash.update(data);
      else {
        console.log(`${hash.digest('hex')}`);
      }
    });
};

await calculateHash();