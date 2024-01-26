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
  const targetDir = join(currentDir, 'files');
  const oldPath = join(targetDir, 'wrongFilename.txt');
  const newPath = join(targetDir, 'properFilename.md');

  const oldPathExists = await pathExists(oldPath);
  const newPathExists = await pathExists(newPath);

  if (!oldPathExists || newPathExists) throw new Error('FS operation failed');

  try {
    await fs.rename(oldPath, newPath);
    console.log('File successfully renamed');
  } catch (error) {
    console.error('Failed to rename file');
  }
};

await rename();
