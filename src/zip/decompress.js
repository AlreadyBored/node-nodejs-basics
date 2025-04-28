import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { join } from 'node:path';

const decompress = async () => {
  const inputPath = join('src', 'zip/files', 'archive.gz');
  const outputPath = join('src', 'zip/files', 'fileToCompress.txt');

  const gzip = createGunzip();

  const inputStream = createReadStream(inputPath);
  const outputStream = createWriteStream(outputPath);

  inputStream.pipe(gzip).pipe(outputStream);

  outputStream.on('finish', () => {
    console.log('File decompressed');
  });
};

await decompress();
