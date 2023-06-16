import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname, isDirOrFileExist } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

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
