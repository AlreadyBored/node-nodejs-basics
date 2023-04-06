import fs from 'fs/promises';

const list = async () => {
  try {
    const fileNames = await fs.readdir('./files'); // make array of filenames
    for (let i of fileNames) {
      console.log(i);
    }
  } catch (err) {
    throw new Error('FS operation failed'); // throw an error if exists
  }
};

await list();
