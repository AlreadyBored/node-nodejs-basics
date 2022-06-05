import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

export const decompress = async () => {
  const pipe = promisify(pipeline);
  const gzip = createUnzip();
  const source = createReadStream('./src/zip/files/archive.gz');
  const destination = createWriteStream('./src/zip/files/fileToCompress.txt');
  await pipe(source, gzip, destination);
};

decompress();
