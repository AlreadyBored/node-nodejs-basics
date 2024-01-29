import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';
import { checkFileExists } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const filesDir = path.join(__dirname, 'files');

  try {
    const existsFilesDir = await checkFileExists(filesDir);
    if (existsFilesDir) {
      const fileNames = await promises.readdir(filesDir);
      console.log(fileNames);
    } else {
      throw new Error('FS operation failed');
    }
  } catch (err) {
    throw err;
  }
};

await list();
