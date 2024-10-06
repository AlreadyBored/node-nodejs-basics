import fs from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const gzip = createGzip();
  const source = fs.createReadStream('files/fileToCompress.txt');
  const destination = fs.createWriteStream('files/archive.gz');

  source.pipe(gzip).pipe(destination);
};

await compress();
