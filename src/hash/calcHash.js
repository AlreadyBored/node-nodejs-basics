import fs from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const FILE_NAME = 'fileToCalculateHashFor.txt';
const FOLDER = '/files';
const ALG = 'sha256';

const fullName = join(import.meta.dirname, FOLDER, FILE_NAME);

const calculateHash = async () => {
  const hash = createHash(ALG);
  const input = fs.createReadStream(fullName);
  input.on('readable', () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
