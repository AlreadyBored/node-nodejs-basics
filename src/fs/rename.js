import fsPromises from 'node:fs/promises';
import { checkFileExist } from './utils.js';

const PATH = './src/fs/files';
const WRONG_PATH = PATH + '/wrongFilename.txt';
const PROPER_PATH = PATH + '/properFilename.md';

const rename = async () => {
  const isWrongFileExist = await checkFileExist(WRONG_PATH);
  const isProperFileExist = await checkFileExist(PROPER_PATH);

  if (!isWrongFileExist || isProperFileExist) {
    throw new Error('FS operation failed');
  }

  fsPromises.rename(WRONG_PATH, PROPER_PATH);
};

await rename();