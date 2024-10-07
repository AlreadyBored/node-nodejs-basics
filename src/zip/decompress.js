import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
  const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = createReadStream(inputFilePath);
  const gunzipStream = createGunzip();
  const writeStream = createWriteStream(outputFilePath);

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File successfully decompressed to fileToCompress.txt');
  });
};

await decompress();