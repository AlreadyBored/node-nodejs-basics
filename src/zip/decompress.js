import { join, dirname } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const pathSource = join(__dirname, 'files', 'archive.gz');
  const pathDestination = join(__dirname, 'files', 'fileToCompress.txt');

  const source = createReadStream(pathSource);
  const destination = createWriteStream(pathDestination);

  const gunzip = createGunzip();
  try {
    await pipeline(source, gunzip, destination);
  } catch (error) {
    console.log('Sorry: ', error.message);
  }
};

await decompress();
