import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');
  fs.unlink(fileToRemovePath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

remove();
