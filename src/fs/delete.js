import fs from 'node:fs/promises';

const remove = async () => {
  const fileToRemovePath = 'files/fileToRemove.txt';

  try {
    await fs.access(fileToRemovePath);
    await fs.unlink(fileToRemovePath);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
};

await remove();
