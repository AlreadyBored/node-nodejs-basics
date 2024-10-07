import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await fs.access(oldFilePath);
    try {
      await fs.access(newFilePath);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    await fs.rename(oldFilePath, newFilePath);
    console.log('File renamed successfully');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await rename();