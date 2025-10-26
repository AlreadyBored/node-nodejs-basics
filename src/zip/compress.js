import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';

const compress = async () => {
  const inputPath = path.join('src', 'zip', 'files', 'fileToCompress.txt');
  const outputPath = path.join('src', 'zip', 'files', 'archive.gz');

  try {
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(inputPath);
    const destination = fs.createWriteStream(outputPath);

    await new Promise((resolve, reject) => {
      source.pipe(gzip).pipe(destination)
        .on('finish', resolve)
        .on('error', () => reject(new Error('FS operation failed')));
    });

    console.log('File compressed successfully');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await compress();
