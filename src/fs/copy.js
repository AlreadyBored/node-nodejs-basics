import { join } from 'node:path';
import { access, mkdir, readdir, copyFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const failed = 'FS operation failed';
const copy = async () => {
  const source = join('src/fs', 'files');
  const dest = join('src/fs', 'files_copy');

  try {
    await access(source, constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(failed);
    }
  }

  try {
    await access(dest, constants.F_OK);

    throw new Error(failed);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await mkdir(dest);
    } else {
      throw err;
    }
  }

  const items = await readdir(source);

  for (const f of items) {
    await copyFile(join(source, f), join(dest, f));
  }
};

await copy();
