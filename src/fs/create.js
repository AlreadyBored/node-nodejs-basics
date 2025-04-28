import { open } from 'node:fs/promises';

const create = async () => {
  const content = 'I am fresh and young';
  const filePath = 'src/fs/files/fresh.txt';

  try {
    const fileHandle = await open(filePath, 'wx');
    await fileHandle.writeFile(content);
    console.log('File created successfully');
    await fileHandle.close();
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.log('Unexpected error:', error);
    }
  }
};

await create();