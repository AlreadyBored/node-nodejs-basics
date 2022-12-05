import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
  const readStream = fs.createReadStream('./src/zip/files/archive.gz');
  const writeStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt');
  readStream.pipe(zlib.createUnzip()).pipe(writeStream);
};

await decompress();