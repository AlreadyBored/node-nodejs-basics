import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
const compressedPath = resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const source = createReadStream(filePath);
  const destination = createWriteStream(compressedPath);
  const gzip = createGzip();

  source.pipe(gzip).pipe(destination);

  source.on('error', (err) => {
    console.error('Source error:', err.message);
  });
  destination.on('error', (err) => {
    console.error('Destination error:', err.message);
  });
  gzip.on('error', (err) => {
    console.error('Gzip error:', err.message);
  });
};

await compress();
