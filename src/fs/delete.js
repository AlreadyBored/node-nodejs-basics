// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import fs from 'fs';
import path from 'path';

const remove = async () => {
  const currentFolder = new URL(import.meta.url).pathname;
  const filePath = path.join(
    path.dirname(currentFolder),
    'files',
    'fileToRemove.txt'
  );

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed: File does not exist');
    }

    fs.unlinkSync(filePath);
    console.log('File has been deleted successfully.');
  } catch (err) {
    console.log(err.message);
  }
};

await remove();
