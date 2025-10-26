import fs from 'fs/promises';
import path from 'path';

const list = async () => {
  const folderPath = path.join('src', 'fs', 'files');

  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);

    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
