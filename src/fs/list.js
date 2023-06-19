import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(folderPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
