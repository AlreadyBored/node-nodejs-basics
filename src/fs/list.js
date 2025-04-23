import { readdir } from 'fs/promises';
import { parse } from 'path';

const list = async () => {
  try {
    const files = await readdir('./src/fs/files', { withFileTypes: true });
    console.log(files.map(({ name }) => parse(name).name));
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
