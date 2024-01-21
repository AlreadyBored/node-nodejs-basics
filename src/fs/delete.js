import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const errorMessage = 'FS operation failed';

const remove = async () => {
  const fileToDelete = 'fileToRemove.txt';
  const targetPath = `${__dirname}/files/${fileToDelete}`;
  try {
    await unlink(targetPath);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await remove();
