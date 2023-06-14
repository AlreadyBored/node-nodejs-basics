import { readdir } from 'node:fs/promises';

const list = async () => {
  const sourcePath = 'src/fs/files';

  try {
    const fileNames = await readdir(sourcePath);
    for (const fileName of fileNames) {
      console.log(fileName);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await list();
