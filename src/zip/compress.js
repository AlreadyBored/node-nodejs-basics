import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const destinationPath = path.join(__dirname, 'files', 'archive.gz');

  const readable = createReadStream(sourcePath);
  const writable = createWriteStream(destinationPath);
  const gzip = createGzip();

  readable.pipe(gzip).pipe(writable);

  readable.on('error', () => console.error('FS operation failed'));
  writable.on('error', () => console.error('FS operation failed'));
};

await compress();
