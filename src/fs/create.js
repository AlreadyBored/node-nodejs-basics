import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    console.log('The file has been successfully written');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
