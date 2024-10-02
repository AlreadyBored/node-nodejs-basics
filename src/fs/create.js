import fs from 'fs/promises';
import path from 'path';

import { ERROR_MESSAGE, FS_PATH } from '../../lib/constants/fs.js';

const fileData = 'I am fresh and young';
const fileName = 'fresh.txt';
const filePath = path.join(FS_PATH, 'files', fileName);

const create = async () => {
  try {
    await fs.writeFile(filePath, fileData, { flag: 'wx' });
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

create();
