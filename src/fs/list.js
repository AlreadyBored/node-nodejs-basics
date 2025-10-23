import { readdir } from 'node:fs';

const path = './fs/files';

const list = async () => {
  readdir(path, (err, files) => {
    if (err) {
      throw Error('FS operation failed');
    }
    console.log(files);
  })
};

await list();
