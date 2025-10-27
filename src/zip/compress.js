import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, 'files', 'fileToCompress.txt');
const dest = path.join(__dirname, 'files', 'archive.gz');

export const compress = async () => {
  const gzip = createGzip();
  const input = createReadStream(src);
  const output = createWriteStream(dest);

  try {
    await pipeline(input, gzip, output);
  } catch (error) {
    console.error(error);
  }
};

await compress();
