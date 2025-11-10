import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dir = path.join(__dirname, 'files');
  const oldPath = path.join(dir, 'wrongFilename.txt');
  const newPath = path.join(dir, 'properFilename.md');

  // Check old exists
  try {
    await fs.access(oldPath);
  } catch {
    throw new Error('FS operation failed');
  }

  // Fail if new already exists
  try {
    await fs.access(newPath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err?.message === 'FS operation failed') throw err;
  }

  try {
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
