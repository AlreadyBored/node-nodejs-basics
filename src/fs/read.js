import { readFile } from 'node:fs/promises';
const getAbsUrl = (path) => new URL(path, import.meta.url);

const read = async () => {
  const url = getAbsUrl(`${'files'}/${'fileToRead.txt'}`);

  try {
    const contains = await readFile(url, 'utf-8');
    console.log(contains);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();