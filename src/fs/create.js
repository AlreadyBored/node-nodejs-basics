import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dir = path.join(__dirname, 'files');
  const filePath = path.join(dir, 'fresh.txt');
  const content = 'I am fresh and young inside of the files folder';

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err?.message === 'FS operation failed') throw err;
  }

  try {
    await fs.writeFile(filePath, content, 'utf8');
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
