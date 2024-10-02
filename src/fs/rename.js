import fs from 'fs/promises';
import path from 'path';

import { ERROR_MESSAGE, FS_PATH } from '../../lib/constants/fs.js';

const sourceFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';

const filePath = path.join(FS_PATH, 'files', sourceFileName);
const newFilePath = path.join(FS_PATH, 'files', newFileName);

const rename = async () => {
  try {
    await fs.rename(filePath, newFilePath);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
