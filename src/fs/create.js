import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(currentDir, 'files', 'fresh.txt');
  const content = 'I am fresh and young';

  try {
    await fs.writeFile(filePath, content, { flag: 'wx' });
    console.log('File created successfully');
  } catch (error) {
    console.error('FS operation failed:', error.message);
  }
};

await create();