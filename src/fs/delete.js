import { unlink } from 'node:fs/promises';
import { DeleteError } from '../errors/deleteError.js';
import { exists } from '../utils/exists.js';

export const remove = async () => {
  const path = 'src/fs/files/fileToRemove.txt';
  try {
    if (!(await exists(path))) throw new DeleteError('There is no file to remove.');
    await unlink(path);
  } catch (error) {
    console.error('\x1b[31m', error, `\n`);
  }
};
