import { promises as fs } from 'fs';
import { join } from 'path';

const list = async () => {
  const folderPath = join('src', 'fs', 'files');

  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);

    console.log(files);
    
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

export { list };
