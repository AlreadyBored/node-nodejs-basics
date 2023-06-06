import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './libs/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targetDir = path.resolve(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(targetDir);
    console.log(files);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();