import { join } from 'node:path';
import { access, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';

const list = async () => {
  const dirPath = join('src/fs', 'files');

  try {
    await access(dirPath, constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }

  const files = await readdir(dirPath);
  console.log(files);
};

await list();
