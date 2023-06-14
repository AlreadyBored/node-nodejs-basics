import { rename as fsRename } from 'node:fs/promises';

import { isFileOrDirExists } from "../utils/utils.js";

const rename = async () => {
  const oldPathname = 'src/fs/files/wrongFilename.txt';
  const newPathname = 'src/fs/files/properFilename.md';

  try {
    const isOldFileExists = await isFileOrDirExists(oldPathname);
    const isNewFileExists = await isFileOrDirExists(newPathname);

    if (!isOldFileExists || isNewFileExists) {
      throw new Error('FS operation failed');
    }

    await fsRename(oldPathname, newPathname);
  } catch (error) {
    throw error;
  }
};

await rename();
