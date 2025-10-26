import { unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
  try {
    await unlink(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
