import fs from 'fs/promises';

const remove = async () => {
  try {
    // remove './files/fileToRemove.txt' file
    await fs.unlink('./files/fileToRemove.txt');
    console.log("'./files/fileToRemove.txt' file is removed.");
  } catch (err) {
    // catch exist error
    if (err.code === 'ENOENT') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await remove();
