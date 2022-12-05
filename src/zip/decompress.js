import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { rm } from 'node:fs/promises';

const decompress = async () => {
  const pathFileToDecompress = './files/archive.gz';

  const gunzip = createGunzip();

  const readStream = createReadStream(pathFileToDecompress);
  const writeStream = createWriteStream('files/fileToCompress.txt');

  readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on('finish', async () => {
      try {
        await rm(pathFileToDecompress);
      } catch (err) {
        console.log(err);
      }
    });
};

await decompress();
