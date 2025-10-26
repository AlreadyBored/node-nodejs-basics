import { readFile } from 'fs/promises';
import { access } from 'fs/promises';

const read = async () => {
  try {
    await access('./src/fs/files/fileToRead.txt');
    const content = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
