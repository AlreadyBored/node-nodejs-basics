
import fsPromises from 'node:fs/promises';

const folderPath = 'src/fs/files';
const fileName = 'fileToRead.txt';
const error = new Error('FS operation failed');

const read = async () => {
  try {
    const data = await fsPromises.readFile(`${folderPath}/${fileName}`, {
      encoding: 'utf8',
    });
    console.log(data);
  } catch {
    throw error;
  }
};

await read();