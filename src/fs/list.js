import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { ListError } from '../errors/listError.js';
import { exists } from '../utils/exists.js';

export const list = async () => {
  try {
    const src = './src/fs/files';
    if (!(await exists(src))) throw new ListError('There is no such folder.');
    const entries = await readdir(src);
    for (let entry of entries) {
      console.log(entry);
    }
    console.log(`\n`);
  } catch (error) {
    console.error('\x1b[31m', error, `\n`);
  }
};
