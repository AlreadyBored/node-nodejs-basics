import { readdir, mkdir, rmdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const copy = async () => {
  try {
    const from = 'src/fs/files';
    const to = 'src/fs/files_copy';
    const files = await readdir(from);
    await mkdir(to);
    for (const file of files) {
      copyFile(join(from, file), join(to, file));
    }
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'EEXIST')
      throw new Error('FS operation failed');
  }
};

await copy();
