import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async (file, newFile) => {
  const filePath = path.join(__dirname, 'files', file);
  const newFilePath = path.join(__dirname, 'files', newFile);
  fs.rename(filePath, newFilePath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log('File rename successfully');
    }
  })
};

rename('wrongFilename.txt', 'properFilename.md')