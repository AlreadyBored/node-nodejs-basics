import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
  const output = path.join(__dirname, 'archive.gz');

  const readStream = fs.createReadStream(fileToCompress);
  const writeStream = fs.createWriteStream(output);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();