import { access, readFile } from 'node:fs/promises';

const read = async () => {
  const path = './files/fileToRead.txt';

  try {
    await access(path);
    let content = await readFile(path, 'utf-8');
    console.log(content);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
