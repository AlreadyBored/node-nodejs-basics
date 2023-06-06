import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './libs/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, 'files');
const targetDir = path.resolve(__dirname, 'files_copy');

const copy = async () => {
  try {
    const files = await fs.readdir(srcDir);
    await fs.mkdir(targetDir, { recursive: false });
    const promises = files.map(file => {
      return fs.copyFile(path.resolve(srcDir, file), path.resolve(targetDir, file));
    });
    await Promise.all(promises);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
