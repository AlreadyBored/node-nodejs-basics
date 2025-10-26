import fs from 'fs/promises';

const list = async () => {
  const folderToList = new URL('./files/', import.meta.url);

  try {
    const files = await fs.readdir(folderToList); 
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
