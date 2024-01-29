import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'node:fs';
import { checkFileExists } from './utils.js';

const { mkdir, readdir, copyFile } = promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    const filesDir = path.join(__dirname, 'files');
    const copyDir = path.join(__dirname, 'files_copy');

    if (await checkFileExists(filesDir)) {
      if (await checkFileExists(copyDir)) {
        throw new Error('FS operation failed');
      } else {
        await mkdir(copyDir);
        const files = await readdir(filesDir);
        await Promise.all(files.map((file) => copyFile(path.join(filesDir, file), path.join(copyDir, file))));
      }
    } else {
      throw new Error('FS operation failed');
    }
  } catch (err) {
    throw err;
  }
};

await copy();
