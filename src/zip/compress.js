import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const compress = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const readStream = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const writeStream = createWriteStream(join(__dirname, 'files', 'archive.gz'));
    const gzip = createGzip();

    await pipeline(readStream, gzip, writeStream);
  } catch (error) {
    console.error(error.message);
  }
};

await compress();