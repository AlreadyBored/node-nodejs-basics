import { rm } from 'node:fs/promises';
const getAbsUrl = (path) => new URL(path, import.meta.url);

const remove = async () => {
  const url = getAbsUrl(`${'files'}/${'fileToRemove.txt'}`);

  try {
    await rm(url);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();