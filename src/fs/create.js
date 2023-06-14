import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const filePath = new URL(path.join('files', 'fresh.txt'), import.meta.url);
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
  try {
    await writeFile(filePath, content, { flag: 'ax' });
  } catch {
    throw new Error(errorMessage);
  }
};

await create();
