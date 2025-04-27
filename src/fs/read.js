import { join } from 'node:path';
import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const read = async () => {
  const filePath = join('src/fs/files', 'fileToRead.txt');

  try {
    await access(filePath, constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }

  const content = await readFile(filePath, 'utf-8');
  console.log(content);
};

await read();
