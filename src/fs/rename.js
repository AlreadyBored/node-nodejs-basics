import { access, rename as fileRename } from 'node:fs/promises';
import { access as l, constants } from 'node:fs';

const getAbsUrl = (path) => new URL(path, import.meta.url);

const rename = async () => {
  const pathToFile = getAbsUrl(`${'files'}/${'properFilename.md'}`);
  const pathToWrongFile = getAbsUrl(`${'files'}/${'wrongFilename.txt'}`);

try {
  await access(pathToWrongFile);
  l(pathToFile, constants.F_OK, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }
    fileRename(pathToWrongFile, pathToFile);
  });

  
} catch {
    throw new Error('FS operation failed');
  }
};

await rename();