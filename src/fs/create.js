import { access, appendFile } from 'fs/promises';
import path from 'path';
import { constants } from 'fs';



export const create = async () => {
  const file = path.join(process.cwd(), 'fresh.txt');
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

  appendFile(file, 'FS operation failed');

};

create();