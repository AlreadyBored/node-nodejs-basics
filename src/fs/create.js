import { appendFile, stat } from "node:fs/promises";

const PATH = './src/fs/files/fresh.txt';

const checkFileExist = async (path) => {
  try {
    const data = await stat(path);
    return Boolean(data);
  } catch (error) {
    return false;
  }
};

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