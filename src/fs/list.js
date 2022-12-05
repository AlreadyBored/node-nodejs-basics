import {__dirnameGet, fileExists, log} from "./utils.mjs";
import {opendir} from "fs/promises";

const getFileList = async (dir, startDir = '', recursive = true) => {
  if (!await fileExists(dir)) {
    throw new Error('FS operation failed');
  }
  let result = [];
  const dirHandle = await opendir(dir);
  for await (const item of dirHandle) {
    if (item?.isDirectory() && recursive) {
      const dirForScan = `${dir}/${item?.name}`;
      const startDirForScan = `${startDir ? startDir + '/' : ''}${item.name}`
      result = [...result, ...await getFileList(dirForScan, startDirForScan, recursive)];
    } else {
      result.push(`${startDir ? startDir + '/' : ''}${item?.name}`)
    }
  }
  return result;
}

const list = async () => {
  const dir = __dirnameGet(import.meta.url);
  const path = `${dir}/files`;
  const fileList = await getFileList(path, '', false);
  log(fileList);
};

await list();
