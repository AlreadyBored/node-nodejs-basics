import { stat, writeFile } from 'node:fs/promises';

const create = async () => {
  try {
    await stat('src/fs/files/fresh.txt');
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile('src/fs/files/fresh.txt', 'I am fresh and young');
    } else {
      throw error.message;
    }
  }
};

await create();