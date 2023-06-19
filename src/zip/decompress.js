import path from 'path';
import * as fs from 'fs';
import zlib from 'zlib';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const decompress = async () => {
  const filesPath = path.resolve(_dirname, 'files');
  const sourcePath = path.join(filesPath, 'archive.gz');
  const distPath = path.join(filesPath, 'fileToCompress.txt');

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(distPath);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
  readStream.on('end', () => {
    fs.unlink(sourcePath, (err) => {
      if (err) throw err;
    });
  });
};

await decompress();
