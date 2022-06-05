import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const create = async () => {
  const filename = fileURLToPath(import.meta.url);
  const path = join(dirname(filename), 'files/fresh.txt');

  try {
    await writeFile(path, 'I am fresh and young', { flag: 'ax' });
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

create();
