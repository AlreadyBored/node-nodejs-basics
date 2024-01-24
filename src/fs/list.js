import { promises as fs, constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));

  const filesFolderPath = join(currentDir, 'files');

  const textFileNames = [];

  try {
    await fs.access(filesFolderPath, constants.F_OK);

    const fileNames = await fs.readdir(filesFolderPath);

    fileNames.forEach((fileName) => {
      if (fileName.toLowerCase().endsWith('.txt')) {
        textFileNames.push(fileName);
      }
    });

    console.log('Array of text files in "files" folder:', textFileNames);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed: Folder "files" does not exist');
      return;
    }

    console.error('FS operation failed:', error.message);
  }
};

await list();