import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { rm } from 'node:fs/promises';

const compress = async () => {
  const gzip = createGzip();

  const readStream = createReadStream('./files/fileToCompress.txt', 'utf8');
  const writeStream = createWriteStream('./files/archive.gz');

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', async () => {
      try {
        await rm('./files/fileToCompress.txt');
      } catch(e) {
        console.log(e);
      }
    });
};

await compress();
