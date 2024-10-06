import { mkdir, readdir, copyFile, access } from 'fs/promises';
import { join } from 'path';
import { customError, getPath } from './fs-constants.js';

const folderPath = getPath(import.meta.url);
const newFolderPath = getPath(import.meta.url, '', 'files-copy');

const copy = async () => {
  try {
    const files = await readdir(folderPath);

    await mkdir(newFolderPath);
    await Promise.all(files.map(file => copyFile(join(folderPath, file), join(newFolderPath, file))));
    // await access(folderPath);
    //
    // const [files] = await Promise.all([readdir(folderPath), mkdir(newFolderPath)]);
    // const promises = files.map(file =>
    //     copyFile(join(folderPath, file), join(newFolderPath, file))
    // );
    //
    // await Promise.all(promises);
  } catch {
    throw new Error(customError);
  }
};

await copy();
