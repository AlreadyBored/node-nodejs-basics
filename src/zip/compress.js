import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

export const compress = async () => {
  const zip = createGzip();
  const fileToRead = createReadStream('src/zip/files/fileToCompress.txt');
  const fileToWrite = createWriteStream('src/zip/files/archive.gz');

  fileToRead.pipe(zip).pipe(fileToWrite);
};

compress();
