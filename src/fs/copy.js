import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    const src = path.resolve(__dirname, 'files');
    const dest = path.resolve(__dirname, 'files_copy');

    await cp(src, dest, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
