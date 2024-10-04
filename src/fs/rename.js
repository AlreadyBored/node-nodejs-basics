import fs from 'fs';

const rename = async () => {
  const PATH = './files/wrongFilename.txt';
  const RENAME_PATH = './files/properFilename.md';
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.stat(RENAME_PATH, function (err, stat) {
        if (err === null) {
          throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
          fs.rename(PATH, RENAME_PATH, () => { });
        }
      });
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await rename();
