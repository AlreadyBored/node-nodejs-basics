import { promises as fs } from 'fs';
import path from 'path';

const rename = async () => {
  const filePath = path.join('files', 'fresh.txt');
  const newFilePath = path.join('files', 'newFresh.md');

  try {
    await fs.access(filePath);

    try {
      await fs.access(newFilePath);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }

    await fs.rename(filePath, newFilePath);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

rename();
