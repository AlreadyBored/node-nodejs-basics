import { createGunzip, createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from 'node:path';

const decompress = async () => {
  const gunzip = createGunzip();
  const from = path.join(path.resolve(''), 'zip', 'files', 'archive.gz');
  const to = path.join(path.resolve(''), 'zip', 'files', 'fileToCompress1.txt');
  const source = createReadStream(from);
  const destination = createWriteStream(to);

  pipeline(source, gunzip, destination, (err) => {
      if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
      }
  });
};

await decompress();