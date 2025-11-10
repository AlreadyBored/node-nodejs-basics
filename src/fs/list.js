import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dir = path.join(__dirname, 'files');

  try {
    await fs.access(dir);
  } catch {
    throw new Error('FS operation failed');
  }

  try {
    const entries = await fs.readdir(dir);
    console.log(entries);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
