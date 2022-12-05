//10

import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream';

const compress = async () => {
 
  const gzip = zlib.createGzip();
  const source = fs.createReadStream('./zip/files/fileToCompress.txt');
  const destination = fs.createWriteStream('./zip/files/archive.txt.gz');

  stream.pipeline(source, gzip, destination, (err) => {
    if (err)  console.log('An error occurred');
});
};

await compress();