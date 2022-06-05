import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async (file) => {
  const filePath = path.join(__dirname, 'files', file);
  const writeStream = fs.createWriteStream(filePath);
  stdin.pipe(writeStream);
};

write('fileToWrite.txt');
