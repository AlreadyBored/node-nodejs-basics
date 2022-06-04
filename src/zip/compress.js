import { createGzip } from 'zlib'
import { pipeline } from 'stream';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async (path, pathZlib) => {
  return new Promise((resolve, reject) => {
    const gzip = createGzip()
    const readable = fs.createReadStream(path);
    readable.on("error", (err) => {
      reject(err)
    });
    const writable = fs.createWriteStream(pathZlib)
    pipeline(
        readable,
        gzip,
        writable,
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve('File compress')
          }
        })
  })
};

compress(path.join(__dirname, 'files', 'fileToCompress.txt'), path.join(__dirname, 'files', 'archive.gz'))
    .then(res => console.log(res))
    .catch(err => {
      process.stderr.write('FS operation failed. File not found');
      process.exit(1);
    })
