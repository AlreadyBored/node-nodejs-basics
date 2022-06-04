import { createUnzip } from 'zlib'
import { pipeline } from 'stream';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async (pathGzip, path) => {
  return new Promise((resolve, reject) => {
    const unzip = createUnzip();
    const readable = fs.createReadStream(pathGzip);
    readable.on("error", (err) => {
      reject(err)
    });
    const writable = fs.createWriteStream(path)
    pipeline(
        readable,
        unzip,
        writable,
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve('File decompress')
          }
        })
  })
};

decompress(path.join(__dirname, 'files', 'archive.gz'), path.join(__dirname, 'files', 'fileToCompress.txt'))
    .then(res => console.log(res))
    .catch(err => {
      process.stderr.write(err.message);
      process.exit(1);
    })
