import { readdir } from 'node:fs/promises';

const list = async () => {
  const folder = 'src/fs/files';

  try {
    const files = await readdir(folder);
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error(' FS operation failed');
  }
};

await list();
