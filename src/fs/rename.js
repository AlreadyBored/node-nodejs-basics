import { rename as renameNode } from 'node:fs/promises';
import { access } from 'node:fs';

const rename = async () => {
  const oldPath = './files/wrongFilename.txt'
  const newPath = './files/properFilename.md';

  access (newPath, async (error) => {
    if (error) {
      try {
        await renameNode(oldPath, newPath);
      } catch {
        throw new Error('FS operation failed');
      }
    } else {
      return Promise.reject(new Error('FS operation failed'));
    }
  });
};

await rename();
