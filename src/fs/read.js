import { access, readFile } from 'node:fs/promises';

const read = async () => {
  const filePath = './files/fileToRead.txt';

  try {
    await access(filePath);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
