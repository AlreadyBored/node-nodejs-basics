import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {

  const filePath = path.join('files', 'fresh.txt');

  try {
    await fs.access(filePath, fs.constants.F_OK);
    throw new Error('FS operation failed: File already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      const content = 'I am fresh and young';
      await fs.writeFile(filePath, content);
      console.log('File created successfully');
    } else {
      console.error('FS operation failed:', error.message);
    }
  }
};
 
await create();