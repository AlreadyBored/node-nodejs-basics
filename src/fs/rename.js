import { promises as fsPromises } from 'fs';

const renameFile = async () => {
  try {
    await fsPromises.access('./files/wrongFilename.txt');
    await fsPromises.rename('./files/wrongFilename.txt', './src/fs/files/properFilename.md');
    console.log("The file name was changed!");
  } catch (error) {
    console.error('FS operation failed');
  }
};

await renameFile();
