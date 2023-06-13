import { readFile } from 'node:fs';
import  path  from 'node:path';

const read = async () => {
  readFile(path.resolve('files', 'fileToRead.txt'), 'utf-8', (error, data) => {
    if (error) throw Error('FS operation failed');
    console.log(data);
  });
};

await read();
