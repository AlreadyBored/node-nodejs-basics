import * as fs from 'fs/promises';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));
const folderPath = path.resolve(__dirname, 'files');
const copiedFolderPath = path.resolve(__dirname, 'files_copy');

export const folderExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }  
}

async function copyFolderRecursively(originalFolder, destinationFolder) {

  const items = await fs.readdir(originalFolder, { withFileTypes: true });

  for (let item of items) {
    const originalPath = path.join(originalFolder, item.name);
    const destinationPath = path.join(destinationFolder, item.name);

    item.isDirectory() ?
        await copyFolderRecursively(originalPath, destinationPath) :
        await fs.copyFile(originalPath, destinationPath);
  }
  console.log(`Files have been successfully copied to ${destinationFolder}`); 
}

export const copy = async () => {
  const doesExist = await folderExists(copiedFolderPath);
  if (!doesExist) {
    await fs.mkdir(copiedFolderPath);
    copyFolderRecursively(folderPath, copiedFolderPath);
  } else {
    throw new Error ('FS operation failed');
  }
};

copy();