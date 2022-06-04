import { pipeline } from 'stream';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async (path) => {
  return new Promise((resolve, reject) => {
    const readable = process.stdin;
    const writable = fs.createWriteStream(path);
    pipeline(
        readable,
        writable,
        (err) => {
          if(err){
            reject(err)
          } else {
            resolve('Complete')
          }
        })
  })
};

write(path.join(__dirname, 'files', 'fileToWrite.txt'))
    .then(res => console.log(res))
    .catch(err => {
      process.stderr.write('FS operation failed');
      process.exit(1);
    })
