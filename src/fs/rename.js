import { join } from 'node:path';
import { access, rename as renameFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const failed = 'FS operation failed';

const rename = async () => {
  const source = join('src/fs/files', 'wrongFilename.txt');
  const destination = join('src/fs/files', 'properFilename.md');

  try {
    await access(source, constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(failed);
    }
  }

  try {
    await access(destination, constants.F_OK);
    throw new Error(failed);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    await renameFile(source, destination);
  }
};

await rename();
