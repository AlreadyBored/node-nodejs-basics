import { promises as fs } from 'fs';
import path from 'path';

const remove = async () => {
  const filePath = path.join('files', 'newFresh.md');

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

remove();
