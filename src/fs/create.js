import { join } from 'node:path';
import { access, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const create = async () => {
  const path = join('src/fs/files', 'fresh.txt');

  try {
    await access(path, constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(path, 'I am fresh and young');

      return;
    }
  }

  throw new Error('FS operation failed');
};

await create();
