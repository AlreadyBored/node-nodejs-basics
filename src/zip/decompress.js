import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const decompress = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const readStream = createReadStream(join(__dirname, 'files', 'archive.gz'));
    const writeStream = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const gunzip = createGunzip();

    await pipeline(readStream, gunzip, writeStream);
  } catch (error) {
    console.error(error.message);
  }
};

await decompress();