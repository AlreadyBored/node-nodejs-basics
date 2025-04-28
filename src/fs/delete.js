import { promises as fs } from 'fs';
import { join } from 'path';

const remove = async () => {
  const filePath = join('src', 'fs', 'files', 'fileToRemove.txt');

  try {
    await fs.access(filePath);

    await fs.unlink(filePath);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

export { remove };
