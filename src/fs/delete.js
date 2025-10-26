import fs from 'fs/promises';

const remove = async () => {
  const fileToRemove = new URL('./files/fileToRemove.txt', import.meta.url);

  try {
    await fs.unlink(fileToRemove);
  } catch {
    throw new Error('FS operation failed'); 
  }
};

await remove();
