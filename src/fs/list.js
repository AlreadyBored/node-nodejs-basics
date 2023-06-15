import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const dirPath = path.join(__dirname, 'files');

  try {
    await fs.access(dirPath);
  } catch (err) {
    throw new Error('FS operation failed');
  }

  try {
    const files = await fs.readdir(dirPath);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }

};

await list();