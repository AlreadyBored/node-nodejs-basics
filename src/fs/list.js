import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { isDirOrFileExist } from './../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
