import { readFile } from 'fs';

const read = async (path) => { 

    readFile(path, 'utf-8', (err, data) => {
        if (err) {
          console.error('FS operation failed');
          return;
        }
        console.log(data);
      });
};

await read('./files/fileToRead.txt');