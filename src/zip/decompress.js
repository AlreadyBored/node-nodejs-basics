import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

export const decompress = async () => {
  const zip = createUnzip();
  const fileToRead = createReadStream('src/zip/files/archive.gz');
  const fileToWrite = createWriteStream('src/zip/files/fileToCompress.txt');

  fileToRead.pipe(zip).pipe(fileToWrite);
};

decompress();
