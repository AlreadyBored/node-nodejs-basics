import { promises as fs, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const currentDir = path.dirname(fileURLToPath(import.meta.url));

  const filePathToRead = path.join(currentDir, 'files', 'fileToRead.txt');

  try {
    await fs.access(filePathToRead, constants.F_OK);

    const fileContent = await fs.readFile(filePathToRead, 'utf-8');

    console.log('Content of fileToRead.txt:', fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed: File "fileToRead.txt" does not exist');
      return;
    }

    console.error('FS operation failed:', error.message);
  }
};

await read();