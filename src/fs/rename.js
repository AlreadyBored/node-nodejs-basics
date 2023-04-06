import fs from 'fs/promises';

const rename = async () => {
  try {
    //  check './files/properFilename.md' file exists
    const fileNames = await fs.readdir('./files');
    if (fileNames.includes('properFilename.md')) {
      throw Error('FS operation failed');
    }

    //  rename wrongFilename to properFilename
    await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');

    console.log('successfully renamed');
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'EEXIST') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await rename();
