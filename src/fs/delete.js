import { existsSync, promises as fs } from 'node:fs';
import path from 'path';

const remove = async () => {
  const file = path.join(process.cwd(), 'files', 'fileToRemove.txt');

  if (!existsSync(file)) {
    throw new Error('FS operation failed');
  }

  await fs.rm(file);
};

await remove();
