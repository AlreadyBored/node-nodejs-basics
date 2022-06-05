import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

export const compress = async () => {
  const pipe = promisify(pipeline);
  const gzip = createGzip();
  const source = createReadStream('./src/zip/files/fileToCompress.txt');
  const destination = createWriteStream('./src/zip/files/archive.gz');
  await pipe(source, gzip, destination);
};

compress();
