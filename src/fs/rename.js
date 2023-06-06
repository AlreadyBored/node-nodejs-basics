import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './libs/constants.js';

class ExistError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ExistError'
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const oldFile = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const newFile = path.resolve(__dirname, 'files', 'properFilename.md');

const rename = async () => {

  try {
    await fs.access(newFile);
    throw new ExistError('');
  } catch (error) {
    if (error.name === 'ExistError') {
      throw new Error(ERROR_MESSAGE);
    }
  }

  try {
    await fs.rename(oldFile, newFile);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();