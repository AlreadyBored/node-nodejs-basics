//5

import util from 'util';
import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream';

const decompress = async () => {
  const pipe = util.promisify(stream.pipeline);

  async function do_gzip(input, output) {
    const gzip = zlib.createGzip();
    const source = fs.createReadStream.toString('./zip/files/archive.txt.gz');
    const destination = fs.createWriteStream('./zip/files/filetoCompress.txt');
    await pipe(source, gzip, destination);
  }

  do_gzip('./zip/files/fileToCompress.txt', './zip/files/archive.txt.gz')
 
};

await decompress();