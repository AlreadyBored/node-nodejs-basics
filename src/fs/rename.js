import fs, { access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const pathExists = (path) => {
  return access(path)
    .then(() => true)
    .catch(() => false);
};

const rename = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const filesDir = join(currentDir, 'files');
  const oldPath = join(filesDir, 'wrongFilename.txt');
  const newPath = join(filesDir, 'properFilename.md');

  const oldPathExists = await pathExists(oldPath);
  const newPathExists = await pathExists(newPath);

  if (!oldPathExists || newPathExists) throw new Error('FS operation failed');

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    console.error('Failed to rename file');
  }
};

await rename();
