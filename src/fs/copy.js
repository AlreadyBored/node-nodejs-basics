import fs from 'fs';

const copy = async () => {
  const PATH = './files';
  const COPY_PATH = './files_copy';

  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.stat(COPY_PATH, function (err, stat) {
        if (err === null) {
          throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
          fs.mkdir(COPY_PATH, () => {
            fs.readdir(PATH, (err, files) => {
              files.forEach((file) => {
                fs.copyFile(`${PATH}/${file}`, `${COPY_PATH}/${file}`, () => { });
              })
            });
          });
        }
      }, () => { });
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await copy();
