import { cp } from 'node:fs';

const sourcePath = './fs/files';
const destinationPath = './fs/files_copy';

const copy = async () => {
  cp(sourcePath, destinationPath, {
    recursive: true,
    force: false,
    errorOnExist: true,
  }, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
  })
};

await copy();
