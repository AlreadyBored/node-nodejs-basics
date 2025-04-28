import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const hash = createHash('sha256');
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    await pipeline(createReadStream(filePath), hash);
    const digest = hash.digest('hex');

    console.log(digest);
  } catch (error) {
    throw new Error('calculateHash operation failed');
  }
};

await calculateHash();