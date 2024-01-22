import { promises as fsPromises } from 'fs';

const remove = async () => {
  try {
    await fsPromises.access('./files/fileToRemove.txt');
    await fsPromises.unlink('./files/fileToRemove.txt');
    console.log('The file was removed!');
  } catch (error) {
    console.error('FS operation failed');
  }
};

await remove();
