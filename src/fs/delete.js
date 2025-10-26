import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
  const filePath = path.join('src', 'fs', 'files', 'fileToRemove.txt');

  try {
    await fs.access(filePath);

    await fs.unlink(filePath);

    console.log('fileToRemove.txt удалён');
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
