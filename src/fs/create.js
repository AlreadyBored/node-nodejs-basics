import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './libs/constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetFile = path.resolve(__dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(targetFile, data, { flag: 'wx' });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
}

await create();