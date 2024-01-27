import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(FILE_PATH, 'I am fresh and young', { flag: 'wx' });
    console.log('The file has been successfully written');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
