import { createHash } from 'crypto';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileBuffer = readFileSync(
    __dirname + '/files/fileToCalculateHashFor.txt',
    () => {}
  );
  const hashSum = createHash('sha256');
  hashSum.update(fileBuffer);

  const hex = hashSum.digest('hex');
  console.log(hex);
};

await calculateHash();
