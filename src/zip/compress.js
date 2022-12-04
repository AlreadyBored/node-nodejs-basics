import { join, dirname } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const pathSource = join(__dirname, 'files', 'fileToCompress.txt');
  const pathDestination = join(__dirname, 'files', 'archive.gz');

  const source = createReadStream(pathSource);
  const destination = createWriteStream(pathDestination);

  const gzip = createGzip();
  try {
    await pipeline(source, gzip, destination);
  } catch (error) {
    console.log('Sorry: ', error.message);
  }
};

await compress();
