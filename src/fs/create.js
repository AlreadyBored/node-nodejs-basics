import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const fileName = 'fresh.txt';
    const data = 'I am fresh and young';
    
    await writeFile(join(__dirname, 'files', fileName), data, { flag: 'wx' });
  } catch (e) {
    throw new Error ('FS operation failed');
  }
};

await create();
