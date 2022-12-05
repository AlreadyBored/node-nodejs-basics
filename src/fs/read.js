import {readFile} from 'fs/promises';
import {__dirnameGet, fileExists, log} from "./utils.mjs";

const read = async () => {
  const dir = __dirnameGet(import.meta.url);
  const fileName = `${dir}/files/fileToRead.txt`;

  if (!await fileExists(fileName)) {
    throw new Error('FS operation failed');
  }
  try {
    const fileContent = await readFile(fileName);
    log(fileContent.toString('utf8'));
  } catch (e) {
    log('Something went wrong', e);
  }
};

await read();
