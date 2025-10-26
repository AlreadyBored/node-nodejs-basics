import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join } from 'node:path';

const CONFIG = {
  file: 'fileToCalculateHashFor.txt',
  dirName: 'files',
};

const __dirname = import.meta.dirname;
const targetFilePath = join(__dirname, CONFIG.dirName, CONFIG.file);

const calculateHash = async () => {
  const hash = createHash('sha256');

  const input = createReadStream(targetFilePath);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
  input.on('end', () => {
    const finalHash = hash.digest('hex');
    console.log(finalHash);
  });
};

await calculateHash();
