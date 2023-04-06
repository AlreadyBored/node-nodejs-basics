import fs from 'fs/promises';

const rename = async () => {
  try {
    //  check './files/properFilename.md' file exists
    await fs.writeFile('./files/properFilename.md', '', { flag: 'wx' });

    //  rename wrongFilename to properFilename
    await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'EEXIST') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await rename();
