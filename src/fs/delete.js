import { rm } from 'fs/promises';
import getPathToFile from '../utils/getPath.js';

const errorMes = 'FS operation failed';

const remove = async () => {
  const fileToDelete = getPathToFile('fs/files/fileToRemove.txt');
try {
    await rm(fileToDelete)
} catch (error) {
    throw new Error(errorMes)
}
  // Write your code here
};

await remove();
