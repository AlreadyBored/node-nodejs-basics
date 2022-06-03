import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const read = async () => {
  const filename = fileURLToPath(import.meta.url);
  const fileToRead = join(dirname(filename), 'files/fileToRead.txt');

  try {
    const content = String(await readFile(fileToRead));
    console.log(content);
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

read();
