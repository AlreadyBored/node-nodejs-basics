import path from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const archivePath = path.join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(archivePath);
  const decompressStream = createGunzip();
  const writeStream = createWriteStream(filePath);

  readStream.pipe(decompressStream).pipe(writeStream);
};

await decompress();
