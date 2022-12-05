import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
  const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt');
  const writeStream = fs.createWriteStream('./src/zip/files/archive.gz');
  readStream.pipe(zlib.createGzip()).pipe(writeStream);
};

await compress();