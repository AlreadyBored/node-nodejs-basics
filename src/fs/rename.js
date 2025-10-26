import { rename as renameFile, access } from 'fs/promises';

const rename = async () => {
  try {
    await access('./src/fs/files/wrongFilename.txt');
    try {
      await access('./src/fs/files/properFilename.md');
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') {
        await renameFile('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
      } else {
        throw new Error('FS operation failed');
      }
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
