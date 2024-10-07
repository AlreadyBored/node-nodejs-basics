import { readFile } from 'node:fs/promises';

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = `${__dirname}/files/fileToRead.txt`;

  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  } 
};

await read();
