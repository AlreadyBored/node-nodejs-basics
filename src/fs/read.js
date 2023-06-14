import { readFile } from 'node:fs/promises';

const read = async () => {
  const sourceFilePath = 'src/fs/files/fileToRead.txt';

  try {
    const fileContent = await readFile(sourceFilePath, 'utf8');
    console.log(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await read();
