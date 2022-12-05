import {cp} from 'fs/promises';
import {__dirnameGet, fileExists, logError} from "./utils.mjs";

const copy = async () => {
  const dir = __dirnameGet(import.meta.url);
  const src = `${dir}/files`;
  const dst = `${dir}/files_copy`;
  if (await fileExists(dst) || !await fileExists(src)) {
    throw new Error('FS operation failed');
  }
  try {
    await cp(`${src}`, `${dst}`, {recursive: true});
  } catch (e) {
    logError('Something went wrong', e);
  }
};

await copy();
