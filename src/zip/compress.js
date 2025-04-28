import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');


const compress = async () => {
  const readStream = createReadStream(fileToCompress);
  const writeStream = createWriteStream(archivePath);
  const gzip = createGzip();
  
  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', () => {
    console.log('File successfully compressed to archive.gz');
    });
};

await compress();