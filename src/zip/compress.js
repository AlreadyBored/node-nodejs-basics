import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(filePath);
  const destination = createWriteStream(archivePath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await compress();
