import { access, writeFile } from 'node:fs/promises';

const create = async () => {
  try {
    await access('src/fs/files/fresh.txt');
    throw new Error('FS operation failed')
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile('src/fs/files/fresh.txt', 'I am fresh and young');
    } else {
      throw error;
    }
  }
};

await create();
