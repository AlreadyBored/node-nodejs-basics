import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const compressedPath = resolve(__dirname, 'files', 'archive.gz');
const decompressedPath = resolve(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const source = createReadStream(compressedPath);
  const destination = createWriteStream(decompressedPath);
  const gunzip = createGunzip();

  source.pipe(gunzip).pipe(destination);

  source.on('error', (err) => {
    console.error('Source error:', err.message);
  });
  destination.on('error', (err) => {
    console.error('Destination error:', err.message);
  });
  gunzip.on('error', (err) => {
    console.error('Gunzip error:', err.message);
  });
};

await decompress();
