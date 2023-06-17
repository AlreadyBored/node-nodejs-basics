import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const source = createReadStream(new URL('./files/archive.gz', import.meta.url));
const destination = createWriteStream(
  new URL('./files/fileToCompress.txt', import.meta.url)
);

const decompress = async () => {
  const unzip = createUnzip();
  source.pipe(unzip).pipe(destination);
};

await decompress();
