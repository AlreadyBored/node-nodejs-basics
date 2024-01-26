import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = join(__dirname, 'files', 'archive.gz');
const outputPath = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(outputPath);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log('File decompressed successfully');
      resolve();
    });
    writeStream.on('error', (error) => {
      console.log('Some error with gunzip');
      reject(error);
    });
  });
};

await decompress();