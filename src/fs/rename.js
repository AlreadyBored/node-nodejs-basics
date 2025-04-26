import fsPromises from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.join('src', 'fs', 'files');
const error = new Error('FS operation failed');

const rename = async () => {
  try {
    const files = await fsPromises.readdir(folderPath);
    if (
      !files.includes('wrongFilename.txt') ||
      files.includes('properFilename.md')
    ) {
      throw error;
    }
    await fsPromises.rename(
      path.join(folderPath, 'wrongFilename.txt'),
      path.join(folderPath, 'properFilename.md')
    );
  } catch {
    throw error;
  }
};

await rename();
