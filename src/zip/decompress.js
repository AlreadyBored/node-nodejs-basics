import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

export const decompress = async () => {
  const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');
  const gzfile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');

  const handleError = (err) => {
    console.log(err);
    readStream.destroy();
    unzipStream.destroy();
    writeStream.destroy();
  };

  const unzipStream = createUnzip();
  const readStream = createReadStream(gzfile);
  const writeStream = createWriteStream(file);
  readStream
    .on('error', handleError)
    .pipe(unzipStream)
    .on('error', handleError)
    .pipe(writeStream)
    .on('error', handleError);
};


await decompress();