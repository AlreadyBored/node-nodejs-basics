import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { isDirOrFileExist } from './../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const sourcePath = join(__dirname, 'files', 'fileToRead.txt');

  const isExist = await isDirOrFileExist(sourcePath);
  if (!isExist) {
    throw new Error('FS operation failed');
  }

  const data = await fs.readFile(sourcePath, { encoding: 'utf-8' });
  console.log(data);
};

await read();
