import { cp } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const copy = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToCopy = path.join(__dirname, 'files/');
    const destinationPath = path.join(__dirname, 'files_copy/');
    const cpOptions = {
      'errorOnExist': true,
      'recursive': true,
      'force': false,
    };
    await cp(pathToCopy, destinationPath, cpOptions);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();