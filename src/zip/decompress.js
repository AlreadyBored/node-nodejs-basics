import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const inputFilePath = join('src', 'fs', 'files', 'archive.gz');
  const outputFilePath = join('src', 'fs', 'files', 'fileToCompress.txt');

  return new Promise((resolve, reject) => {
    const inputFileStream = createReadStream(inputFilePath);
    const outputFileStream = createWriteStream(outputFilePath);
    const gunzipStream = createGunzip();

    inputFileStream
      .pipe(gunzipStream)
      .pipe(outputFileStream);

    outputFileStream.on('finish', () => {
      console.log('File decompressed successfully back to fileToCompress.txt');
      resolve();
    });

    outputFileStream.on('error', (err) => {
      console.error('Error writing decompressed file:', err);
      reject(new Error('FS operation failed'));
    });

    inputFileStream.on('error', (err) => {
      console.error('Error reading compressed file:', err);
      reject(new Error('FS operation failed'));
    });

    gunzipStream.on('error', (err) => {
      console.error('Error during decompression:', err);
      reject(new Error('FS operation failed'));
    });
  });
};

await decompress();
