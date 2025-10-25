import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { join } from 'path';
import { __dirname } from '../utils.js';

const compress = async () => {
  const sourseFile = join(__dirname, 'zip', 'files', 'fileToCompress.txt');
  const gzipFile = join(__dirname, 'zip', 'files', 'archive.gz');
  const input = createReadStream(sourseFile, 'utf-8');
  const output = createWriteStream(gzipFile);
  const gzip = createGzip();

  pipeline(
    input, 
    gzip, 
    output, 
    (error) => {
    if (error) {
      console.log(error);
    }
  })
}

await compress();
