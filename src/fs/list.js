import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files');

const list = async () => {
  if (!existsSync(pathToFile)) {
    throw new Error('FS operation failed');
  }

  try {
    const files = await fs.readdir(pathToFile);
    files.forEach(file => {
      console.log(file);
    });
  } catch (error) {
    console.error('Error reading files');
  }
};

await list();