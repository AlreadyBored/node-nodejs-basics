import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join('src', 'fs', 'files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
      } catch (err) {
        if (err.code === 'ENOENT') {
          await fs.writeFile(filePath, 'I am fresh and young', 'utf-8');
        } else {
          throw new Error('FS operation failed');
        }
      }
};

export { create };