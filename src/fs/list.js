import * as fs from 'fs/promises';
import path from 'path';

// list.js - implement function that prints all array of filenames from files folder 
// into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

const __dirname = path.resolve(path.dirname(''));
const folderToListPath = path.join(__dirname, 'files');

export const doesExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }  
}

export const list = async () => {
  const folderExists = doesExist(folderToListPath);
  const filesArray = [];

  if (folderExists) {
    console.log('the folder exists');
    const items = await fs.readdir(folderToListPath, { withFileTypes: true });

    for (let item of items) {
      filesArray.push(item.name);
    }
    console.log(filesArray);

  } else throw new Error ('FS operation failed');
};

list();