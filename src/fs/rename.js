import { rename as fsRename, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  try {
    const srcPath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const destPath = path.resolve(__dirname, 'files', 'properFilename.md');

    await access(srcPath);

    try {
      await access(destPath);
      throw new Error();
    } catch {}

    await fsRename(srcPath, destPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
