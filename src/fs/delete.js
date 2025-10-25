import { rm, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const remove = async () => {
  const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await access(fileToRemove, constants.F_OK);
    await rm(fileToRemove);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(errorText);
    }
    throw new Error(errorText);
  }
};

await remove();

