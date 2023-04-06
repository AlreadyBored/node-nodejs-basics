import fs from 'fs/promises';

const rename = async () => {
  try {
    const fileList = await fs.readdir('./files');
    if (!fileList.includes('properFilename.md')) {
      // checking if such file exists
      await fs.rename('./files/wrongFilename.txt', './files/properFilename.md'); // rename filename
    } else {
      throw new Error('FS operation failed'); // throw an error if file already exists in such name
    }
  } catch (err) {
    throw new Error('FS operation failed'); // throw an error if file does not exist to rename
  }
};

await rename();
