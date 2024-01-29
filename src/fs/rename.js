import { promises as fs, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';

  const currentDir = path.dirname(fileURLToPath(import.meta.url));

  const oldFilePath = path.join(currentDir, 'files', oldFileName);
  const newFilePath = path.join(currentDir, 'files', newFileName);

  try {
    
    await fs.access(oldFilePath, constants.F_OK);

    await fs.access(newFilePath, constants.F_OK);

    throw new Error('FS operation failed: Destination file already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed: Source file does not exist');
      
    }

    console.error('FS operation failed:', error.message);
    
  }

  try {
    await fs.rename(oldFilePath, newFilePath);
    console.log('File renamed successfully');
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await rename();