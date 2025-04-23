import { readFile } from 'fs/promises';

const read = async () => {
  try {
    const content = await readFile('./src/fs/files/fileToRead.txt');
    console.log(content.toString());
  } catch {
    throw new Error('FS operation failed');
  };
};

await read();
