import { readFile } from 'node:fs/promises';
import path from 'node:path';

const filePath = new URL(path.join('files', 'fileToRead.txt'), import.meta.url);
const errorMessage = 'FS operation failed';

const read = async () => {
  try {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await read();
