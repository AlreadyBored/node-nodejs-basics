import { mkdir, readdir, copyFile } from 'node:fs/promises';

import { isFileOrDirExists } from '../utils/utils.js'

const copy = async () => {
    const sourceFolderPath = 'src/fs/files';
    const targetFolderPath = 'src/fs/files_copy';

    try {
      const isSourceFolderExists = await isFileOrDirExists(sourceFolderPath);
      const isTargetFolderExists = await isFileOrDirExists(targetFolderPath);

      if (!isSourceFolderExists || isTargetFolderExists) {
        throw new Error('FS operation failed');
      }

      await mkdir(targetFolderPath);

      const files = await readdir(sourceFolderPath);
      for (const fileName of files) {
        await copyFile(`${sourceFolderPath}/${fileName}`, `${targetFolderPath}/${fileName}`);
      }
    } catch (error) {
        throw error;
    }
};

await copy();
