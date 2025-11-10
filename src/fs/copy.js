import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const srcDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files_copy');

  try {
    // Validate source directory exists
    await fs.access(srcDir);
  } catch {
    throw new Error('FS operation failed');
  }

  // Fail if destination already exists
  try {
    await fs.access(destDir);
    // If access succeeds, destination exists
    throw new Error('FS operation failed');
  } catch (err) {
    // If error is because it doesn't exist, proceed; else rethrow custom error already thrown
    if (err?.message === 'FS operation failed') throw err; // dest exists case above
  }

  try {
    // Use recursive copy
    await fs.cp(srcDir, destDir, { recursive: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
