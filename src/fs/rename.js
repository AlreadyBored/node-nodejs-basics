import { rename as fsRename, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

const rename = async () => {
  const srcPath = join('src', 'fs', 'files', 'wrongFilename.txt');
  const destPath = join('src', 'fs', 'files', 'properFilename.md');

  try {
    await access(srcPath, constants.F_OK);
    await access(destPath, constants.F_OK).then(
      () => { throw new Error(); },
      () => {}
    );
    await fsRename(srcPath, destPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
