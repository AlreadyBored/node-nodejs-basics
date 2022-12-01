import { readFile } from 'node:fs/promises';

const PATH = './src/fs/files/fileToRead.txt';

const read = async () => {
  try {
    const contents = await readFile(PATH, { encoding: 'utf8' });
    console.log(contents);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();