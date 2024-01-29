import { unlink } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files');

const remove = async () => {
  try {
    await unlink(path.join(filesFolder, 'fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
