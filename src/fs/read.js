import * as fs from 'fs';
import path from 'path';

// read.js - implement function that prints content of the fileToRead.txt into console 
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
const __dirname = path.resolve(path.dirname(''));

const readFilePath = path.join(__dirname, 'files/fileToRead.txt');

const doesExist = async (path) => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (err) {
    return false;
  }
}

export const read = async () => {
  const fileExists = await doesExist(readFilePath);
  if (fileExists) {
    fs.readFile(readFilePath, 'utf8', (err, data) => {
      if (err) throw new Error ('FS operation failed');
      console.log(data.toString('utf8'));
    });
  } else {
    throw new Error ('FS operation failed');
  }
};

read();