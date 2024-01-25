import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  
  const hash = createHash('sha256');

  const input = createReadStream(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
