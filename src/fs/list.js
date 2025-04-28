import { readdir } from 'node:fs/promises';

const list = async () => {
  const dirPath = 'src/fs/files';

  try {
    const filenames = await readdir(dirPath);
    console.log('Filenames in the files folder:', filenames);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.log(`Unexpected error when reading the contents of ${dirPath}:`, error);
    }
  }
};

await list();
