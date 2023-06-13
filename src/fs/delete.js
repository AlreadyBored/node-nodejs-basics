import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { isDirOrFileExist } from './../utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');
  const doesFileToRemovePathExist = await isDirOrFileExist(fileToRemovePath);
  if (!doesFileToRemovePathExist) {
    throw new Error('FS operation failed');
  }

  await fs.unlink(fileToRemovePath);
};

await remove();
