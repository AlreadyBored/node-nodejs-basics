import { cp } from 'node:fs/promises';
import { checkFileExist } from './utils.js';

const PATH = './src/fs';

const copy = async () => {
  const isFiLesCopyExist = await checkFileExist(`${PATH}/files_copy`);
  const isFiLesExist = await checkFileExist(`${PATH}/files`);
  if (isFiLesCopyExist || !isFiLesExist) {
    throw new Error('FS operation failed');
  }
  cp(
    `${PATH}/files`,
    `${PATH}/files_copy`,
    {
      recursive: true,
      errorOnExist: true,
      force: false,
    }
  )
};

copy();