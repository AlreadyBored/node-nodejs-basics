import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.resolve(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(archivePath);
  const destination = createWriteStream(filePath);

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await decompress();
