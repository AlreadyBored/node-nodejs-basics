import fs from 'fs/promises';
import path from 'path';

const create = async () => {
  const filePath = path.join('src', 'fs', 'files', 'fresh.txt');
  const content = 'I am fresh and young';

  try {
    await fs.writeFile(filePath, content, { flag: 'wx' });
    console.log('fresh.txt создан');
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();