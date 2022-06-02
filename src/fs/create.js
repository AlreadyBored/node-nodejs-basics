import { access, appendFile } from 'fs/promises';
import path from 'path';
import { constants } from 'fs';
import { fileURLToPath } from 'url';

export const create = async () => {
  const wd = path.dirname(fileURLToPath(import.meta.url));
  const file = path.join(wd, 'files', 'fresh.txt');
  let fileExists = false;

  try {
    await access(file, constants.F_OK);
    fileExists = true;
  }
  catch {
  }

  if (fileExists) {
    throw new Error('FS operation failed');
  }

  appendFile(file, 'I am fresh and young');
  console.log('File created sucsecfully');

};

create();