import fs from 'fs/promises';
import path from 'path';

import { ERROR_MESSAGE, FS_PATH } from '../../lib/constants/fs.js';

const filesPath = path.join(FS_PATH, 'files');

const list = async () => {
  try {
    const filesList = await fs.readdir(filesPath);
    console.log(filesList);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
