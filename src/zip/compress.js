import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const outputFilePath = path.join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);
  const gzip = createGzip();

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', () => {
      console.log('File compressed successfully to archive.gz');
    })
    .on('error', (error) => {
      console.error('Error during compression:', error.message);
    });
};

await compress();