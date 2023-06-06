import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './libs/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targetFile = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const data = await fs.readFile(targetFile, { encoding: 'utf-8' });
    console.log(data);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();