import fs from 'fs';

const create = async () => {
  const PATH = './files/fresh.txt';
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      throw new Error('FS operation failed')
    } else if (err.code === 'ENOENT') {
      fs.writeFile(PATH, 'I am fresh and young', () => { });
    }
  }, () => { });
};

await create();
