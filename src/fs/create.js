import { writeFile } from 'fs/promises';
import { customError, getPath } from './fs-constants.js';

const fileContent = 'I am fresh and young';
const filePath = getPath(import.meta.url, 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, fileContent, { flag: 'wx' });
  } catch {
    throw new Error(customError);
  }
};

await create();