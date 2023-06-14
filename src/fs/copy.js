import { readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const copy = async () => {
  try {
    const from = 'src/fs/files';
    const to = 'src/fs/files_copy';
    await mkdir(to);

    const files = readdir(from);
  } catch (error) {
    if (error.code === 'EEXIST' || error.code === 'ENOENT')
      throw new Error('FS operation failed');
  }
};

await copy();
