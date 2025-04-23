import { access, writeFile } from 'fs/promises';

const create = async () => {
  const file = './src/fs/files/fresh.txt';
  const content = 'I am fresh and young';
  const error = new Error('FS operation failed');

  try {
    await access(file);

    throw error;
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(file, content);
    } else throw error;
  }
};

await create();
