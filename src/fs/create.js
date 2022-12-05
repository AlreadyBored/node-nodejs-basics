import { writeFile } from 'fs/promises';
import getPathToFile from '../utils/getPath.js';

const fileContent = 'I am fresh and young';
const errorMes = 'FS operation failed';

const create = async () => {
  try {
    const src = getPathToFile('fs/files/fresh.txt');
    await writeFile(src, fileContent, { flag: 'wx' });
  } catch (error) {
    throw new Error(errorMes);
  }
};

await create();
