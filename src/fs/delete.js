import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname, isDirOrFileExist } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');
  const doesFileToRemovePathExist = await isDirOrFileExist(fileToRemovePath);
  if (!doesFileToRemovePathExist) {
    throw new Error('FS operation failed');
  }

  await fs.unlink(fileToRemovePath);
};

await remove();
