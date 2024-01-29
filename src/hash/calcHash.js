import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const hash = createHash('sha256');

const calculateHash = async () => {
  await pipeline(
    createReadStream(join(__dirname, 'files', 'fileToCalculateHashFor.txt')),
    hash.setEncoding('hex'),
    stdout
  )
};

await calculateHash().catch(console.error);
