import { access, cp } from 'fs/promises';

const copy = async () => {
  const files = './src/fs/files';
  const filesCopy = './src/fs/files_copy';
  const error = new Error('FS operation failed');

  try {
    await access(files);
  } catch {
    throw error;
  }

  try {
    await access(filesCopy);

    throw error;
  } catch (err) {
    if (err.code === 'ENOENT') {
      await cp(files, filesCopy, { recursive: true });
    } else throw error;
  }
};

await copy();
