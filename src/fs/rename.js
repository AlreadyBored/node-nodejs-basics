import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
  const folder = join('src', 'fs', 'files');
  const oldPath = join(folder, 'wrongFilename.txt');
  const newPath = join(folder, 'properFilename.md');

  try {
    await fs.access(oldPath);

    try {
      await fs.access(newPath);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }

    await fs.rename(oldPath, newPath);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

export { rename };
