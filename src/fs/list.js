import { promises as fs } from 'fs';

const list = async () => {
  try {
  const files = await fs.readdir('src/fs/files')
  const arr = [];
  files.map(file => arr.push(file))
  console.log(arr)
  }
  catch {
    throw new Error('FS operation failed')
  }
};

await list();
