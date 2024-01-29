import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const hash = createHash('sha256');

  const input = createReadStream(
    __dirname + '/files/fileToCalculateHashFor.txt'
  );
  input.on('readable', () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
