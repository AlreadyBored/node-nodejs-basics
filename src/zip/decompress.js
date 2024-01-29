import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFile = join(__dirname, 'files', 'archive.gz');
const outputFile = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const readStream = createReadStream(inputFile);
  const gunzipStream = createGunzip();
  const writeStream = createWriteStream(outputFile);

  try {
    await pipeline(readStream, gunzipStream, writeStream);
    console.log('File compressed successfully.');
  } catch (error) {
    console.error(error);
  }
};

await decompress();
