import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { getPath } from '../fs/fs-constants.js';

const filePath = getPath(import.meta.url, 'archive.gz');
const destinationPath = getPath(import.meta.url, 'fileToCompress.txt');

const decompress = async () => {
  const readableStream = createReadStream(filePath);
  const writableStream = createWriteStream(destinationPath);
  const decompressedStream = createUnzip();

  readableStream.pipe(decompressedStream).pipe(writableStream);
};

await decompress();