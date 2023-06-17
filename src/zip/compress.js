import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const source = createReadStream(
  new URL('./files/fileToCompress.txt', import.meta.url)
);
const destination = createWriteStream(
  new URL('./files/archive.gz', import.meta.url)
);

const compress = async () => {
  const gzip = createGzip();
  source.pipe(gzip).pipe(destination);
};

await compress();
