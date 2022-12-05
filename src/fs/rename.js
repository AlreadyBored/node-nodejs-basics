import {parse} from 'path';
import {rename as rn} from 'fs/promises';
import {__dirnameGet, fileExists, logError} from "./utils.mjs";

const rename = async () => {
  const path = __dirnameGet(import.meta.url);
  const srcFile = `${path}/files/wrongFilename.txt`
  const {dir, name} = parse(srcFile);
  const dstFile = `${dir}/${name}.md`;
  if (!await fileExists(srcFile) || await fileExists(dstFile)) {
    throw new Error('FS operation failed');
  }
  try {
    await rn(srcFile, dstFile);
  } catch (e) {
    logError('Something went wrong', e);
  }
};

await rename();
