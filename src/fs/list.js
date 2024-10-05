import fs from 'fs';

const list = async () => {
  const PATH = './files';
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.readdir(PATH, (err, files) => {
        console.log(files);
      });
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await list();
