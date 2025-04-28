import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';

const compress = async () => {
  const inputFilePath = join('src', 'fs', 'files', 'fileToCompress.txt');
  const outputFilePath = join('src', 'fs', 'files', 'archive.gz');

  return new Promise((resolve, reject) => {
    const inputFileStream = createReadStream(inputFilePath);
    const outputFileStream = createWriteStream(outputFilePath);
    const gzipStream = createGzip();

    inputFileStream
      .pipe(gzipStream)
      .pipe(outputFileStream);

    outputFileStream.on('finish', () => {
      console.log('File compressed successfully to archive.gz');
      resolve();
    });

    outputFileStream.on('error', (err) => {
      console.error('Error writing compressed file:', err);
      reject(new Error('FS operation failed'));
    });

    inputFileStream.on('error', (err) => {
      console.error('Error reading file:', err);
      reject(new Error('FS operation failed'));
    });

    gzipStream.on('error', (err) => {
      console.error('Error during compression:', err);
      reject(new Error('FS operation failed'));
    });
  });
};

await compress();
