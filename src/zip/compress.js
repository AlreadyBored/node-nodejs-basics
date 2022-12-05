import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');
  const gzfile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');

  const handleError = (err) => {
    console.log(err);
    readStream.destroy();
    zipStream.destroy();
    writeStream.destroy();
  };

  const readStream = createReadStream(file);
  const zipStream = createGzip();
  const writeStream = createWriteStream(gzfile);
  readStream
    .on('error', handleError)
    .pipe(zipStream)
    .on('error', handleError)
    .pipe(writeStream)
    .on('error', handleError);
};

await compress();