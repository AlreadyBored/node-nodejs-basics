import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
const { createHash } = await import('node:crypto');

const url = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(url);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();