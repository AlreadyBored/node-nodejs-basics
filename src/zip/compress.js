import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { join } from 'node:path';
const compress = async () => {
  const inputPath = join('src', 'zip/files', 'fileToCompress.txt');
  const outputPath = join('src', 'zip/files', 'archive.gz');

  const gzip = createGzip();

  const inputStream = createReadStream(inputPath);
  const outputStream = createWriteStream(outputPath);

  inputStream.pipe(gzip).pipe(outputStream);

  outputStream.on('finish', () => {
    console.log('File compressed');
  });
};

await compress();
