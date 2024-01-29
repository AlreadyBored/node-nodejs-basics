import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const gzip = createGzip();
const input = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
const output = createWriteStream(join(__dirname, 'files', 'archive.gz'));

const compress = async () => {
  await pipeline(
    input,
    gzip,
    output
  );
};

await compress().catch(console.error);
