import { readFile } from 'node:fs/promises';

const read = async () => {
  const filePath = 'src/fs/files/fileToRead.txt';

  try {
    const content = await readFile(filePath, 'utf-8');
    console.log(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.log('Unexpected error:', error);
    }
  }
};

await read();