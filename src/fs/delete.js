import fsPromises from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.join('src', 'fs', 'files');
const error = new Error('FS operation failed');

const remove = async () => {
  try {
    await fsPromises.rm(`${folderPath}/fileToRemove.txt`);
  } catch {
    throw error;
  }
};

await remove();
