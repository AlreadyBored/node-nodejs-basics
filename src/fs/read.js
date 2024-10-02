import fs from 'fs/promises';
import path from 'path';

import { ERROR_MESSAGE, FS_PATH } from '../../lib/constants/fs.js';

const filePath = path.join(FS_PATH, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileData = await fs.readFile(filePath, { encoding: 'utf-8' });
    console.log(fileData);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
