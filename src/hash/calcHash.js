import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  const hash = createHash('sha256');
  const source = createReadStream(filePath);

  try {
    await pipeline(source, hash);
    console.log(hash.digest('hex'));
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
