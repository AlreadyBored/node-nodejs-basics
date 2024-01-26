import { access, rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const pathExists = (path) => {
  return access(path)
    .then(() => true)
    .catch(() => false);
};

const remove = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const targetDir = join(currentDir, 'files');
  const targetFilePath = join(targetDir, 'fileToRemove.txt');

  const fileExists = await pathExists(targetFilePath);

  if (!fileExists) throw new Error('FS operation failed');

  try {
    await rm(targetFilePath);
    console.log('File removed successfully');
  } catch (error) {
    console.error('Error removing the file:', error.message);
  }
};

await remove();
