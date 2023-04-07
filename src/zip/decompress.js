import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { rm } from 'node:fs/promises';

const decompress = async () => {
  const gUnZip = createGunzip();

  const readStream = createReadStream('./files/archive.gz');
  const writeStream = createWriteStream('files/fileToCompress.txt');

  readStream
    .pipe(gUnZip)
    .pipe(writeStream)
    .on('finish', async () => {
      try {
        await rm('./files/archive.gz');
      } catch(e) {
        console.log(e);
      }
    });
};

await decompress();
