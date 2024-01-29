import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';
import { checkFileExists } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    const existsFileToRemove = await checkFileExists(fileToRemove);

    if (existsFileToRemove) {
      await promises.unlink(fileToRemove);
    } else {
      throw new Error('FS operation failed');
    }
  } catch (err) {
    throw err;
  }
};

await remove();
