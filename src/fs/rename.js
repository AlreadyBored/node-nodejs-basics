import { link, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, 'files', 'wrongFilename.txt');
const dest = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
  try {
    await link(src, dest);
    await unlink(src);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
