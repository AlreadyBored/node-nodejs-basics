import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './libs/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targetFile = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {

  try {
    await fs.rm(targetFile)
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();