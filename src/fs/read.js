import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToRead.txt');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log(data);
    }
  });
};

await read();

