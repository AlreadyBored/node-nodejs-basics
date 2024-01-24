import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { cp } from 'node:fs/promises';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const srcPath = join(__dirname, 'files');
  const destPath = join(__dirname, 'files_copy');

  if (existsSync(destPath)) {
    throw new Error ('FS operation failed');
  }

  try {
    await cp(srcPath, destPath, { recursive: true });
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await copy();
