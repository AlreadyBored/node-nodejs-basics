import { rm, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    await access(filePath);

    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
