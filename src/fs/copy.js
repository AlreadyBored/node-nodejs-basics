import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourceFolder = path.join(__dirname, 'files');
  const destinationFolder = path.join(__dirname, 'files_copy');

  try {
    await fs.access(sourceFolder);
    try {
      await fs.access(destinationFolder);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }
    await fs.cp(sourceFolder, destinationFolder, { recursive: true });
    console.log('Folder copied successfully');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await copy();
