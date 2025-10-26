import { cp } from 'fs/promises';
import { access } from 'fs/promises';

const copy = async () => {
  try {
    await access('./src/fs/files');
    try {
      await access('./src/fs/files_copy');
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') {
        await cp('./src/fs/files', './src/fs/files_copy', { recursive: true });
      } else {
        throw new Error('FS operation failed');
      }
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
