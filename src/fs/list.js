import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname, isDirOrFileExist } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const list = async () => {
  const dirListPath = join(__dirname, 'files');
  const doesDirListPathExist = await isDirOrFileExist(dirListPath);

  if (!doesDirListPathExist) {
    throw new Error('FS operation failed');
  }

  const fileList = await fs.readdir(dirListPath);

  console.log(fileList);
};

await list();
