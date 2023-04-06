import fs from 'fs/promises';

const remove = async () => {
  try {
    await fs.unlink('./files/fileToRemove.txt'); // remove file
  } catch (err) {
    throw new Error('FS operation failed'); // throw an error if exists
  }
};

await remove();
