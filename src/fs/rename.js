import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fsPromises from 'node:fs/promises';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = join(__dirname, 'files', 'properFilename.md');

  try {
    await fsPromises.rename(oldPath, newPath);
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await rename();
