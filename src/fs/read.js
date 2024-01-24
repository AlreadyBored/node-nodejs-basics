import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const contents = await readFile(join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8' });
    console.log(contents);
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await read();
