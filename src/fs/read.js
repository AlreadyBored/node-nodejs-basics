import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET_FILE = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const contents = await readFile(TARGET_FILE, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
