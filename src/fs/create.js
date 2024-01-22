import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log('fs = ', fs);

const pathToFile = join(__dirname, 'files', 'fresh.txt');

// console.log('pathToFile = ', pathToFile);

const create = async () => {
  try {
    await fs.access(pathToFile);
    throw new Error('File already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(pathToFile, 'I am fresh and young');
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await create();