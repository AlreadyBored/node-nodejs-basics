import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'node:fs';
import { checkFileExists } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rename = async () => {
  const wrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFilename = path.join(__dirname, 'files', 'properFilename.md');

  try {
    if (await checkFileExists(wrongFilename)) {
      if (await checkFileExists(properFilename)) {
        throw new Error('FS operation failed');
      } else {
        await promises.rename(wrongFilename, properFilename);
      }
    } else {
      throw new Error('FS operation failed');
    }
  } catch (err) {
    throw err;
  }
};

await rename();
