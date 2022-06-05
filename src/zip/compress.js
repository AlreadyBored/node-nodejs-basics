import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
  createReadStream,
  createWriteStream
} from 'fs';

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('./files/fileToCompress.txt');
    const destination = createWriteStream('archive.gz');
    
    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};
