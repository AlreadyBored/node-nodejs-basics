import {readdir} from 'node:fs/promises';

const list = async () => {
  const path = './files';

  try {
    const files = await readdir(path);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
