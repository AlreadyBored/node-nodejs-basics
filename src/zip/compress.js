import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { rm } from 'node:fs/promises';

const compress = async () => {
  const pathFileToCompress = './files/fileToCompress.txt';
  const gzip = createGzip();

  const readStream = createReadStream(pathFileToCompress);
  const writeStream = createWriteStream('files/archive.gz');

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', async () => {
      try {
        await rm(pathFileToCompress);
      } catch (err) {
        console.log(err);
      }
    });
};

await compress();
