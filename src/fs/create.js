import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = 'fresh.txt';
const data = 'I am fresh and young';

const create = async () => {
  try {    
    await writeFile(join(__dirname, 'files', fileName), data, {flag: 'wx'});
    console.log('fresh.txt was created');
  } catch (e) {
    throw new Error ('FS operation failed');
  }
};

await create();
