import { rename as fileRename } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const rename = async () => {
  const filename = fileURLToPath(import.meta.url);
  const oldFile = join(dirname(filename), 'files/wrongFilename.txt');
  const newFile = join(dirname(filename), 'files/properFilename.md');

  try {
    await fileRename(oldFile, newFile);
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

rename();
