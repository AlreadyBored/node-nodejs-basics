import { promises as fsPromises } from 'fs';

const read = async () => {
  try {
    await fsPromises.access('./files/fileToRead.txt');
    const data = await fsPromises.readFile('./files/fileToRead.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('FS operation failed');
  }
};

await read();
