import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  fs.createReadStream(
    join(__dirname, 'files', 'fileToRead.txt'),
    'utf-8',
  ).pipe(process.stdout);
};

read();
