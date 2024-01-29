import { promises as fs, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const fileNameToRemove = 'fileToRemove.txt';

  const currentDir = path.dirname(fileURLToPath(import.meta.url));

  const filePathToRemove = path.join(currentDir, 'files', fileNameToRemove);

  try {
    await fs.access(filePathToRemove, constants.F_OK);

    await fs.unlink(filePathToRemove);
    console.log('File removed successfully');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed: File does not exist');
      return;
    }

    console.error('FS operation failed:', error.message);
  }
};

await remove();