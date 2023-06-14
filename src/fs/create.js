import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(filePath, content, {flag: 'ax'});
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
