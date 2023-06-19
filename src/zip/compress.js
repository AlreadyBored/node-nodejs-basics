import path from 'path';
import * as fs from 'fs';
import zlib from 'zlib';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compress = async () => {
  const filesPath = path.resolve(_dirname, 'files');
  const sourcePath = path.join(filesPath, 'fileToCompress.txt');
  const distPath = path.join(filesPath, 'archive.gz');

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(distPath);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
  readStream.on('end', () => {
    fs.unlink(sourcePath, (err) => {
      if (err) throw err;
    });
  });
};

await compress();
