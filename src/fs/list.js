import { readdir } from 'node:fs/promises';

const folderPath = new URL('files', import.meta.url);
const errorMessage = 'FS operation failed';

const list = async () => {
  try {
    const folder = await readdir(folderPath);
    console.log(folder);
  } catch {
    throw new Error(errorMessage);
  }
};

await list();
