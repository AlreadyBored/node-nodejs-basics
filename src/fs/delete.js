import { join } from 'node:path';
import { access, unlink } from 'node:fs/promises';
import { constants } from 'node:fs';

const remove = async () => {
  const filePath = join('src/fs/files', 'fileToRemove.txt');

  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await remove();
