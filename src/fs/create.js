import fs from 'fs/promises';

const create = async () => {
  const filePath = new URL('./fresh.txt', import.meta.url)
  
  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx'})
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
