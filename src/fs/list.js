import { readdir } from 'fs/promises';
import { access } from 'fs/promises';

const list = async () => {
  try {
    await access('./src/fs/files');
    const files = await readdir('./src/fs/files');
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
