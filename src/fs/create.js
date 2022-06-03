import { writeFile } from "fs/promises";
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

export const create = async () => {
  const resolvedPath = path.resolve(__dirname, 'files/fresh.txt');
  try {
    await writeFile(resolvedPath, 'I am fresh and yound', { flag: 'wx' });
  } catch (err) {
    console.log('FS operation failed');
  }
};

create();