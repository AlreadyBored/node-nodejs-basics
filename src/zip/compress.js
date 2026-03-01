import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const inputFile = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const outputFile = path.resolve(__dirname, 'files', 'archive.gz');

  return new Promise((resolve, reject) => {
    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gzip = createGzip();

    readStream.on('error', () => reject(new Error('FS operation failed')));
    writeStream.on('error', () => reject(new Error('FS operation failed')));

    writeStream.on('finish', resolve);

    readStream.pipe(gzip).pipe(writeStream);
  });
};

await compress();
