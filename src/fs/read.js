import { readFile } from 'fs/promises';

const read = async () => {
  try {
    const data = await readFile('./files/fileToRead.txt', 'utf-8');
      console.log(data);

  } catch {
    throw Error('FS operation failed');
  }
};

await read();
