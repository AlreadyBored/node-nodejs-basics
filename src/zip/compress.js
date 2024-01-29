import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFile = join(__dirname, 'files', 'fileToCompress.txt');
const outputFile = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readStream = createReadStream(inputFile);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(outputFile);

  try {
    await pipeline(readStream, gzipStream, writeStream);
    console.log('File compressed successfully.');
  } catch (error) {
    console.error(error);
  }
};

await compress();
