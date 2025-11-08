import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, 'files', 'archive.gz');
  const destinationPath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const readable = createReadStream(sourcePath);
  const writable = createWriteStream(destinationPath);
  const gunzip = createGunzip();

  readable.pipe(gunzip).pipe(writable);

  readable.on('error', () => console.error('FS operation failed'));
  writable.on('error', () => console.error('FS operation failed'));
};

await decompress();
