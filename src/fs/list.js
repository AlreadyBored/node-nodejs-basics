import fs from 'fs/promises';
import path from 'path';

const list = async () => {
  const dirPath = path.resolve('files');
     
  try {
    const files = await fs.readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};     

await list();
