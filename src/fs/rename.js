import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname, isDirOrFileExist } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);
const rename = async () => {
  const sourcePath = join(__dirname, 'files', 'wrongFilename.txt');
  const destinationPath = join(__dirname, 'files', 'properFilename.md');

  const doesSourceExist = await isDirOrFileExist(sourcePath);
  const doesDestinationExist = await isDirOrFileExist(destinationPath);
  if (!doesSourceExist || doesDestinationExist) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(sourcePath, destinationPath);
  } catch (err) {
    throw err;
  }

};

await rename();
