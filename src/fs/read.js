import fs from 'fs';

const read = async () => {
  const PATH = './files/fileToRead.txt';
  fs.stat(PATH, function (err, stat) {
    if (err === null) {
      fs.readFile(PATH, 'utf-8', (err, data) => console.log(data));
    } else if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }, () => { });
};

await read();
