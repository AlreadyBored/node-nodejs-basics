import fs from 'fs/promises';
import path from 'path';

import { ERROR_MESSAGE, FS_PATH } from '../../lib/constants/fs.js';

const fileName = 'fileToRemove.txt';
const filePath = path.join(FS_PATH, 'files', fileName);

const remove = async () => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
