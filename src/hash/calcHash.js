const { createHash } = await import('node:crypto');
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const pathFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const input = createReadStream(pathFile);
  const output = process.stdout;
  const hash = createHash('sha256').digest('hex');

  await pipeline(input, hash, output);
};

await calculateHash();
