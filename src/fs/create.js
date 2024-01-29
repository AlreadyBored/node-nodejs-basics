import { writeFile } from 'node:fs/promises';
const getAbsUrl = (path) => new URL(path, import.meta.url);

const CONTENT = 'I am fresh and young';

const create = async () => {
  const url = getAbsUrl(`${'files'}/${'fresh.txt'}`);

  try {
    await writeFile(url, CONTENT, { flag: 'wx' });
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await create();