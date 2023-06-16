import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname, isDirOrFileExist } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const sourcePath = join(__dirname, 'files');
  const destinationPath = join(__dirname, 'files_copy');

  const doesSourceExist = await isDirOrFileExist(sourcePath);
  const doesDestinationExist = await isDirOrFileExist(destinationPath);

  if (!doesSourceExist || doesDestinationExist) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.cp(sourcePath, destinationPath, {
      recursive: true,
    });
  } catch (err) {
    throw err;
  }
};

await copy();
