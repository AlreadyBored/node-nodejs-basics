import { pipeline } from 'stream';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async (path) => {
  return new Promise((resolve, reject) => {
    const readable = fs.createReadStream(path, { encoding: 'utf-8' });
    readable.on("error", (err) => {
        reject(err)
    });
    const writable = process.stdout;
    pipeline(
        readable,
        writable,
        (err) => {
          if(err){
            reject(err)
          }
        })
  })
};

read(path.join(__dirname, 'files', 'fileToRead.txt'))
    .then(res => console.log('File read'))
    .catch(err => {
      process.stderr.write('FS operation failed. File not found');
      process.exit(1);
    })
