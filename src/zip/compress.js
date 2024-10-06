import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { getPath } from '../fs/fs-constants.js';

const filePath = getPath(import.meta.url, 'fileToCompress.txt');
const destinationPath = getPath(import.meta.url, 'archive.gz');

const compress = async () => {
  const readableStream = createReadStream(filePath);
  const writableStream = createWriteStream(destinationPath);
  const compressedStream = createGzip();

  readableStream.pipe(compressedStream).pipe(writableStream);
};

await compress();