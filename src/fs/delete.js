import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    console.log('File deleted successfully');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await remove();