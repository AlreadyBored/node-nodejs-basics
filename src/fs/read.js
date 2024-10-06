import { readFile } from 'fs/promises';
import { customError, getPath } from "./fs-constants.js";

const filePath = getPath(import.meta.url, 'fileToRead.txt');

const read = async () => {
  try {
    const fileContent = await readFile(filePath, { encoding: 'utf8' });

    console.log(fileContent);
  } catch {
    throw new Error(customError);
  }
};

await read();