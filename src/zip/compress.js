import fs from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const source = fs.createReadStream('src/zip/files/fileToCompress.txt');
  const compressedFile = fs.createWriteStream('archive.gz');

  source.pipe(createGzip()).pipe(compressedFile);
};

await compress();