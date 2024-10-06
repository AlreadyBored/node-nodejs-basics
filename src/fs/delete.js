import { unlink, rm } from 'fs/promises';
import { customError, getPath } from './fs-constants.js';

const deletedFile = getPath(import.meta.url, 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(deletedFile);
    // await unlink(deletedFile);
  } catch {
    throw new Error(customError);
  }

};

await remove();