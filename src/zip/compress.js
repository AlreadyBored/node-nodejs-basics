import fs from 'fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
  await pipeline(
    fs.createReadStream('./zip/files/fileToCompress.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./zip/files/archive.gz'),
  )
};

await compress();