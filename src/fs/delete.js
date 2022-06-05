import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async (file) => {
  const filePath = path.join(__dirname, 'files', file);
    fs.unlink(filePath, (err) => {
      if (err) {
        throw new Error('FS operation failed');
      } else {
        console.log(`File ${filePath} removed!`);
      }
    })
};

remove('fileToRemove.txt');