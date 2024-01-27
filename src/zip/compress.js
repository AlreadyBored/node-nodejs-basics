import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from 'node:path';

const compress = async () => {
  const gzip = createGzip();
  const from = path.join(path.resolve(''), 'zip', 'files', 'fileToCompress.txt');
  const to = path.join(path.resolve(''), 'zip', 'files', 'archive.gz');
  const source = createReadStream(from);
  const destination = createWriteStream(to);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
   
};

await compress();