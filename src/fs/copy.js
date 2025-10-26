import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files_copy');

export const copy = async () => {
  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
