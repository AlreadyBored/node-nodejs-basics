import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const inputFile = path.resolve(__dirname, 'files', 'archive.gz');
  const outputFile = path.resolve(__dirname, 'files', 'fileToCompress.txt');

  return new Promise((resolve, reject) => {
    const readStream = createReadStream(inputFile);
    const writeStream = createWriteStream(outputFile);
    const gunzip = createGunzip();

    readStream.on('error', () => reject(new Error('FS operation failed')));
    writeStream.on('error', () => reject(new Error('FS operation failed')));

    writeStream.on('finish', resolve);

    readStream.pipe(gunzip).pipe(writeStream);
  });
};

await decompress();
