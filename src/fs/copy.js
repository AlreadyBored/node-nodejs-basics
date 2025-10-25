import { join } from 'path';
import { __dirname } from '../utils.js';
import { readdir, mkdir, copyFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';

const copy = async () => {

   const fileCopy = join(__dirname, 'fs/files_copy');
   const dir = join(__dirname, 'fs/files');

  try {
    if (existsSync(fileCopy) || !existsSync(dir)) {
      throw new Error('FS operation failed')
    }

    await mkdir(fileCopy);
    const files = await readdir(dir);
    const copiedFiles = await readdir(fileCopy);
    if (copyFile.length !== 0) {
      for (const file of copiedFiles) {
        unlink(join(__dirname, 'fs/files-copy', file));
      }
    }
    for (const file of files) {
      await copyFile(join(__dirname, 'fs/files', file), join(fileCopy, file));
    }
    console.log('Files copied');
  } catch (err) {
    console.error(err)
  }
};

await copy();
