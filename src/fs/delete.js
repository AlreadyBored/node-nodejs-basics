import {rm} from 'fs/promises';
import {__dirnameGet, fileExists, logError} from "./utils.mjs";

const remove = async () => {
  const dir = __dirnameGet(import.meta.url);
  const fileName = `${dir}/files/fileToRemove.txt`;
  if (!await fileExists(fileName)) {
    throw new Error('FS operation failed');
  }
  try {
    await rm(fileName);
  } catch (e) {
    logError('Something went wrong', e);
  }
};

await remove();
