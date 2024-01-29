import { createWriteStream } from 'fs';
import path from 'path';
import { stdin } from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files');
const fileToWrite = path.join(filesFolder, 'fileToWrite.txt');

const write = async () => {
  const output = createWriteStream(fileToWrite);
  process.stdin.pipe(output);
};

await write();
