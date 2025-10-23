import { readFile } from 'node:fs';

const path = './fs/files/fileToRead.txt';

const read = async () => {
  readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw Error('FS operation failed');
    }
    console.log(data);
  })
};

await read();
