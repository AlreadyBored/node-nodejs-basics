import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const sourceFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const destinationFilePath = path.join(__dirname, 'files', 'archive.gz');

  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(sourceFilePath);
    const gzipStream = zlib.createGzip();
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.on('error', (error) => {
      reject(error);
    });

    gzipStream.on('error', (error) => {
      reject(error);
    });

    writeStream.on('error', (error) => {
      reject(error);
    });

    writeStream.on('finish', () => {
      resolve();
    });

    readStream
      .pipe(gzipStream)
      .pipe(writeStream);
  });
};

await compress();
