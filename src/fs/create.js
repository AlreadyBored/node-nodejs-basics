import { appendFile, stat } from "node:fs/promises";
import { checkFileExist } from './utils.js';

const PATH = './src/fs/files/fresh.txt';

const create = async () => {
  try {
    const isFileExist = await checkFileExist(PATH);
    if (isFileExist) {
      throw new Error('FS operation failed');
    }
    await appendFile(PATH, 'I am fresh and young');
  } catch (error) {
    console.error(error)
  }
};

await create(); 