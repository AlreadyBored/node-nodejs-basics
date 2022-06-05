import { readFile } from 'node:fs/promises';
import { ReadError } from '../errors/readError.js';
import { exists } from '../utils/exists.js';

export const read = async () => {
  try {
    const src = './src/fs/files/fileToRead.txt';
    if (!(await exists(src))) throw new ReadError('There is no such file to read.');
    const fileContent = await readFile(src, { encoding: 'utf8' });
    console.log(fileContent);
  } catch (error) {
    console.error('\x1b[31m', error, `\n`);
  }
};
