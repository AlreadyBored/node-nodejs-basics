import { rename as renameFs, stat } from 'node:fs/promises';

const rename = async () => {
  const oldFile = 'src/fs/files/wrongFilename.txt';
  const newFile = 'src/fs/files/properFilename.md';

  try {
    await stat(oldFile);
    try {
      await stat(newFile);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code === 'ENOENT') {
        renameFs(oldFile, newFile);
      } else {
        throw error;
      }
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();