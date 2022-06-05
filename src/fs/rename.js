import { rename as renameFile } from 'node:fs/promises';
import { RenameError } from '../errors/renameError.js';
import { exists } from '../utils/exists.js';

export const rename = async () => {
  const oldPath = 'src/fs/files/wrongFilename.txt';
  const newPath = 'src/fs/files/properFilename.md';
  try {
    if (!(await exists(oldPath)) && (await exists(newPath))) throw new RenameError('No file to rename or file is already renamed.');
    await renameFile(oldPath, newPath);
  } catch (error) {
    console.error('\x1b[31m', error, `\n`);
  }
};
