import fs from 'fs';

const remove = async () => {
  const PATH = './files/fileToRemove.txt';
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.unlink(PATH, (err) => console.log(err));
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });

};

await remove();