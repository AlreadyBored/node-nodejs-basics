import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async (file) => {
  const filePath = path.join(__dirname, 'files', file);
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(stdout);
};

read('fileToRead.txt');