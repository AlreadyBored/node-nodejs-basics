import { copyFile, mkdir, readdir } from 'node:fs/promises';

const getAbsUrl = (path) => new URL(path, import.meta.url);

const copy = async () => {
  const path = getAbsUrl('files');
  const pathCopy = getAbsUrl('files_copy');

  try {
    await mkdir(pathCopy);
    const files = await readdir(path);
    const arr = files.map(item => {
      copyFile(getAbsUrl(`${path}/${item}`), getAbsUrl(`${pathCopy}/${item}`));
    });
    await Promise.all(arr);
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await copy();
