import path from 'path';
import fs from 'fs/promises';

import { ERROR_MESSAGE, FS_PATH } from '../../lib/constants/fs.js';

const filesPath = path.join(FS_PATH, 'files');
const filesCopyPath = path.join(FS_PATH, 'files_copy');

const copy = async () => {
  try {
    const [files] = await Promise.all([fs.readdir(filesPath), fs.mkdir(filesCopyPath)]);

    const copyPromises = files.map((fileName) =>
      fs.copyFile(path.join(filesPath, fileName), path.join(filesCopyPath, fileName))
    );

    await Promise.all(copyPromises);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
