import path from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const archivePath = path.join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(filePath);
  const compressStream = createGzip();
  const writeStream = createWriteStream(archivePath);

  readStream.pipe(compressStream).pipe(writeStream);
};

await compress();
