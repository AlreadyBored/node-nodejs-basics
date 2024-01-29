import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "fileToCompress.txt");
const destPath = path.join(dirName, 'files', 'archive.gz')

const compress = async () => {
  createReadStream(sourcePath)
  .pipe(createGzip())
  .pipe(createWriteStream(destPath))
  .on('finish', () => console.log('File successfully compressed'));
};

await compress();