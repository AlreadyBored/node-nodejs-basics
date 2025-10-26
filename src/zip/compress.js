import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const source = createReadStream('./src/zip/files/fileToCompress.txt');
  const destination = createWriteStream('./src/zip/files/archive.gz');
  const gzip = createGzip();
  
  await pipeline(source, gzip, destination);
};

await compress();
