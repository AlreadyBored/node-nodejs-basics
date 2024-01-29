import { readdir } from 'node:fs/promises';

const list = async () => {
  const url = new URL('./files', import.meta.url)

  try {
    const files = await readdir(url);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();