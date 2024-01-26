import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const gzip = createGzip();
  const src = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
  const dest = createWriteStream(join(__dirname, 'files', 'archive.gz'));

  await pipeline(
    src,
    gzip,
    dest
  );
};

await compress();
