import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';

const decompress = async () => {
  const inputPath = path.join('src', 'zip', 'files', 'archive.gz');
  const outputPath = path.join('src', 'zip', 'files', 'fileToCompress.txt');

  try {
    const gunzip = zlib.createGunzip();
    const source = fs.createReadStream(inputPath);
    const destination = fs.createWriteStream(outputPath);

    await new Promise((resolve, reject) => {
      source.pipe(gunzip).pipe(destination)
        .on('finish', resolve)
        .on('error', () => reject(new Error('FS operation failed')));
    });

    console.log('File decompressed successfully');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await decompress();
