import fsPromises from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.join('src', 'fs', 'files');
const fileName = 'fileToRead.txt';
const error = new Error('FS operation failed');

const read = async () => {
  try {
    const data = await fsPromises.readFile(path.join(folderPath, fileName), {
      encoding: 'utf8',
    });
    console.log(data);
  } catch {
    throw error;
  }
};

await read();
