import fs from 'fs/promises';
import {__dirnameGet, fileExists, logError} from './utils.mjs';

const create = async () => {
  const dir = __dirnameGet(import.meta.url);
  const fileName = `${dir}/fresh.txt`;
  const content = 'I am fresh and young';
  if (await fileExists(fileName)) {
    throw new Error('FS operation failed');
  }

  try {
    const handle = await fs.open(fileName, 'w');
    await fs.writeFile(handle, content);
  } catch (e) {
    logError('Something went wrong', e);
  }
};

await create();
