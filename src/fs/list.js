import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const folderPath = path.resolve(__dirname, 'files');

    const files = await readdir(folderPath);

    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
