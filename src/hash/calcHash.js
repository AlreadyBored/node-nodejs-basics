import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const filePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });

  stream.on('end', () => {
    console.log(hash.digest('hex'));
  });

  stream.on('error', (err) => {
    console.error('Error:', err.message);
  });
};

await calculateHash();
