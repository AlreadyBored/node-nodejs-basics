import * as fs from 'fs/promises';
import path from 'path';

// rename.js - implement function that renames file wrongFilename.txt to properFilename 
// with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists 
// Error with message FS operation failed must be thrown)

const __dirname = path.resolve(path.dirname(''));

export const doesExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }  
}

export const rename = async () => {
  const fileToRename = 'wrongFilename.txt';
  const renamedFile = 'properFilename.md';
  const fileToRenamePath = path.join(__dirname, `files/${fileToRename}`);
  const renamedFilePath = path.join(__dirname, `files/${renamedFile}`);
  const fileExists = await doesExist(renamedFilePath);
  if (!fileExists) {
    await fs.rename(fileToRenamePath, renamedFilePath);
  } else {
    throw new Error ('FS operation failed');
  }
};

rename();