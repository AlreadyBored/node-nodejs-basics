import fs from 'fs/promises';

const read = async () => {
   const fileToRead = new URL('./files/fileToRead.txt', import.meta.url);

  try {
    const contentToRead = await fs.readFile(fileToRead, 'utf-8');
    console.log(contentToRead);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
