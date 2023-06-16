import * as zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
  const read = createReadStream('src/zip/files/archive.gz');
  const write = createWriteStream('src/zip/files/fileToCompress.txt');
  const unzip = zlib.createUnzip();

   read.pipe(unzip).pipe(write);
};

await decompress();
