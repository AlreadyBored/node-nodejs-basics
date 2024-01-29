import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(__dirname + '/files/fileToCompress.txt');
  const destination = createWriteStream(__dirname + '/archive.gz');
  pipeline(source, gzip, destination, err => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();
